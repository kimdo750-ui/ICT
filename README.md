# 원강정보통신 - 공정사진 촬영앱

## 🎯 프로젝트

정보통신공사 현장의 **공정사진**을 쉽게 촬영하고 관리하는 웹 앱입니다.

- **작업 전/중/후** 3단계 사진 촬영
- 구글 시트에 자동 저장
- GPS 위치 기록
- 사진대지 PDF 생성

---

## 🚀 사용하기

### 온라인 (추천)
https://kimdo750-ui.github.io/ICT/

### 로컬 테스트
```bash
cd 공정사진촬영웹
python -m http.server 8000
# http://localhost:8000/공정사진_촬영앱_클라우드.html
```

---

## ⚙️ 설정

### 1단계: 구글 시트 + Apps Script 준비
- 구글 시트 생성
- 확장프로그램 → Apps Script
- code.gs 코드 저장 및 배포

### 2단계: 배포 URL 입력
앱에서 **⚙ 구글시트 연결 설정**으로 배포 URL 입력

---

## 📁 폴더 구조
```
.
├── docs/                          # GitHub Pages (index.html)
├── 공정사진촬영웹/                  # 원본 웹앱 파일
│   └── 공정사진_촬영앱_클라우드.html
├── README.md
└── PDF 문서들
```

---

**개발자**: kimdo750@gmail.com
