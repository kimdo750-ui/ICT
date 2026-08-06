/**
 * ============================================================
 *  공정사진 수신 백엔드 (Google Apps Script)
 *  - 폰 웹앱에서 보낸 사진을 구글드라이브에 저장
 *  - 구글시트에 한 줄씩 기록 (=IMAGE 썸네일 포함)
 *  - 현장명 / 공종 / 단계(전·중·후) / 촬영시각 / GPS / 사진링크
 *
 *  [설치 방법]
 *  1) sheets.google.com 에서 새 구글시트 하나 만들기
 *  2) 확장 프로그램 → Apps Script 클릭
 *  3) 이 코드 전체를 붙여넣고 저장
 *  4) 상단 setup 함수 한 번 실행 (권한 허용) → 시트/폴더 자동 준비
 *  5) 배포 → 새 배포 → 유형 "웹 앱"
 *       - 실행: 나
 *       - 액세스 권한: 모든 사용자
 *     → 생성된 웹앱 URL 복사해서 프론트엔드(index.html)의 API_URL에 붙여넣기
 * ============================================================
 */

// ── 설정값 ──────────────────────────────────────────────
var SHEET_NAME  = '공정사진';        // 기록용 시트 탭 이름
var FOLDER_NAME = '공정사진_업로드';  // 드라이브 저장 폴더 이름
// ────────────────────────────────────────────────────────


/**
 * 최초 1회 실행 — 시트 헤더와 드라이브 폴더를 준비한다.
 * (에디터 상단에서 setup 선택 후 실행 → 권한 허용)
 */
function setup() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  sheet.clear();
  sheet.getRange(1, 1, 1, 8).setValues([[
    '접수시각', '현장명', '공종', '단계', '촬영시각', 'GPS', '사진', '사진링크'
  ]]);
  sheet.getRange(1, 1, 1, 8).setFontWeight('bold').setBackground('#12303a').setFontColor('#ffffff');
  sheet.setFrozenRows(1);
  sheet.setColumnWidth(7, 140);  // 사진 썸네일 열 넓게
  sheet.setColumnWidth(2, 160);
  sheet.setColumnWidth(3, 160);

  getOrCreateFolder();  // 폴더 미리 생성
  Logger.log('준비 완료: 시트 "' + SHEET_NAME + '" + 폴더 "' + FOLDER_NAME + '"');
}


/**
 * 웹앱 POST 수신 — 프론트엔드가 사진을 보낼 때 호출된다.
 */
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    // 여러 장을 한 번에 받을 수 있게 배열 처리
    var items = data.photos || [data];
    var results = [];

    var folder = getOrCreateFolder();
    var sheet = getSheet();
    var now = new Date();

    items.forEach(function(item) {
      // Base64 → 이미지 파일
      var base64 = item.image.replace(/^data:image\/\w+;base64,/, '');
      var bytes  = Utilities.base64Decode(base64);
      var stageKr = item.stage || '';
      var site   = item.site || '(현장명 미입력)';
      var work   = item.work || '(공종 미입력)';
      var shotAt = item.time || '';
      var gps    = item.gps || '';

      // 파일명: 현장_공종_단계_시각
      var stamp = Utilities.formatDate(now, 'GMT+9', 'yyyyMMdd_HHmmss');
      var fname = [site, work, stageKr, stamp].join('_')
                    .replace(/[\\/:*?"<>|]/g, '-') + '_' + Math.floor(Math.random()*1000) + '.jpg';

      var blob = Utilities.newBlob(bytes, 'image/jpeg', fname);
      var file = folder.createFile(blob);
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

      var fileId  = file.getId();
      var viewUrl = 'https://drive.google.com/file/d/' + fileId + '/view';
      // 시트 =IMAGE 용 직접 링크
      var imgUrl  = 'https://lh3.googleusercontent.com/d/' + fileId;

      sheet.appendRow([
        Utilities.formatDate(now, 'GMT+9', 'yyyy-MM-dd HH:mm:ss'),
        site, work, stageKr, shotAt, gps,
        '=IMAGE("' + imgUrl + '")',
        viewUrl
      ]);
      // 방금 추가한 행 사진 셀 높이 키우기
      var r = sheet.getLastRow();
      sheet.setRowHeight(r, 90);

      results.push({ ok: true, file: fname, url: viewUrl });
    });

    return json({ status: 'success', count: results.length, results: results });

  } catch (err) {
    return json({ status: 'error', message: String(err) });
  }
}


/**
 * 브라우저에서 URL을 직접 열었을 때 (동작 확인용)
 */
function doGet() {
  return json({ status: 'ok', message: '공정사진 백엔드 정상 작동 중' });
}


// ── 헬퍼 ────────────────────────────────────────────────
function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) { setup(); sheet = ss.getSheetByName(SHEET_NAME); }
  return sheet;
}

function getOrCreateFolder() {
  var it = DriveApp.getFoldersByName(FOLDER_NAME);
  return it.hasNext() ? it.next() : DriveApp.createFolder(FOLDER_NAME);
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
