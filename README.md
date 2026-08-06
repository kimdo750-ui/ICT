# ICT - 정보통신 포트폴리오

## 🏠 포트폴리오

- **메인**: https://kimdo750-ui.github.io/ICT/
  - 정보통신설비 점검표 작성도구

---

## 🎯 공정사진 촬영앱

정보통신공사 현장의 **공정사진**을 쉽게 촬영하고 관리하는 웹 앱입니다.

### 📱 접근
https://kimdo750-ui.github.io/ICT/photo/

### 기능
- **작업 전/중/후** 3단계 사진 촬영
- 구글 시트에 자동 저장
- GPS 위치 기록
- 사진대지 PDF 생성

### ⚙️ 설정

**1단계: 구글 시트 + Apps Script 준비**
- 구글 시트 생성
- 확장프로그램 → Apps Script
- 공정사진촬영웹/구글시트연동_백엔드_Code.gs 코드 배포

**2단계: 배포 URL 입력**
앱에서 **⚙ 구글시트 연결 설정**으로 배포 URL 입력

### 🏗️ 로컬 테스트
```bash
cd 공정사진촬영웹
python -m http.server 8000
# http://localhost:8000/공정사진_촬영앱_클라우드.html
```

---

## 📁 폴더 구조
```
.
├── docs/
│   ├── index.html                 # 메인 포트폴리오
│   └── photo/
│       └── index.html             # 공정사진 촬영앱
├── 공정사진촬영웹/                 # 웹앱 소스 코드
├── 정보통신설비-점검표-작성도구.html  # 메인 페이지 원본
├── PDF 문서들
└── README.md
```

**개발자**: kimdo750@gmail.com
