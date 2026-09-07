// 원강 일일작업 — ★매일 이 파일만 교체★ (GitHub: docs/jobs.js)
// core: '4C'|'8C' (도면 세경/PON 숫자 기준) · dist: 미터(도면 숫자, 없으면 null)
window.JOBS = [
  {no:1, code:'0441', jibun:'경기 양주시 장흥면 일영리 360-1', report:'일영리 360-1 벽',                    work:'전주', warn:false, core:'4C', dist:51,   detail:'벽 2포트 신설 · 함체 P.우장4우1-PR1 FJ01G312(전주) · 신4C', mat:'4C · 도면 51m'},
  {no:2, code:'0435', jibun:'경기 양주시 장흥면 석현리 189-2', report:'석현리 189-2 (09시 고객약속)',        work:'전주', warn:true,  core:'4C', dist:90,   detail:'⚠️09시 약속·구내시도 후 고객결정 · 2층 베란다 2포트 · 함체 P.석현리22-1 FJ02G376(전주) · 신4C 90m', mat:'4C · 도면 90m'},
  {no:3, code:'0438', jibun:'경기 양주시 장흥면 석현리 224', report:'석현리 224 스카이모텔 옥상',            work:'구내', warn:false, core:'4C', dist:null, detail:'옥상~구내단자함(월창) 3포트 · 함체 FJ01G414 · 구내단자 신4C', mat:'4C · 옥내(거리확인)'},
  {no:4, code:'0439', jibun:'경기 의정부시 의정부동 429-37', report:'의정부동 429-37 가스계량기옆',          work:'전주', warn:false, core:'4C', dist:null, detail:'가스계량기 옆 벽 2포트 · 함체 P.신세간1후-2 FU54G3A2(전주)', mat:'4C · 거리확인'},
  {no:5, code:'0144', jibun:'경기 의정부시 의정부동 439-25', report:'의정부동 439-25 201호 PC방',           work:'구내', warn:true,  core:'8C', dist:null, detail:'⚠️광(-0144) PC방 2코아 · 광접속함 재조립+코아증설(역전-5,7) · 신8코아 · 대형도면 현장확인', mat:'8C · 신설(거리확인)'},
  {no:6, code:'0498', jibun:'경기 의정부시 의정부동 24-18', report:'의정부동 24-18 금강장 옥상',             work:'전주', warn:false, core:'4C', dist:19,   detail:'금강장 옥상 2포트 · 함체 R.터미널5_4-2 FB14R112(전주) · 신4C', mat:'4C · 도면 19m'},
  {no:7, code:'0497', jibun:'경기 의정부시 낙양동 산58', report:'낙양동 산58 앞쪽 전주',                     work:'전주', warn:true,  core:'4C', dist:null, detail:'⚠️산번지 앞쪽 전주 2포트 · 함체 P.민락리우-27 F013R014(전주) · 신4C · 도로명없음', mat:'4C · 거리확인'},
  {no:8, code:'0122', jibun:'경기 남양주시 별내면 청학리 488', report:'청학리 488 수락산거성 101동 옥탑',    work:'구내', warn:true,  core:'8C', dist:80,   detail:'⚠️무선(-0122) 거성아파트 101동 옥탑 RU30 · 세경8C 80m 가공가설+MDF · 16형 재조립', mat:'8C · 도면 80m 가공'},
];
