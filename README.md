# Reviewit · 써봤다면, 리뷰잇!

ITF 과제 4의 모바일 우선 UI/UX 프로토타입. 데스크톱에서는 넓은 피드, 모바일에서는 4탭 구조를 제공한다.

## 실행

Node.js 22 이상. 별도 패키지 설치가 필요 없다.

```sh
npm run dev
npm run check
npm run build
```

미리보기: http://127.0.0.1:4173 · 배포 산출물: `dist/`

## GitHub Actions

새 저장소의 `main`에 이 폴더 내용을 올리고 Settings → Pages → Source를 **GitHub Actions**로 설정한다. `.github/workflows/pages.yml`이 push 시 문법 검사, 상태 정책 테스트, 정적 빌드, GitHub Pages 배포를 수행한다. PR에서는 검사와 빌드만 한다. 별도 API 키나 장기 액세스 토큰을 코드에 넣지 않는다.

공식 문서: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## 시연 순서

1. 홈 → 상품 → 구매 인증하고 리뷰 쓰기
2. 별점, 20자 이상 리뷰, 예시 인증 자료, 검토 안내 동의 → 제출
3. 마이에서 검토 중/예상 500P 확인
4. ‘시연: 검토 결과 바꿔보기’에서 승인 → 사용 가능 포인트 확인
5. 실패·보완 상태 → 수정 및 재제출
6. 마이 → 사업자 신청 → 신청 내역 및 승인·반려 시연

## 범위와 제한

- 실제 사용자 인증, 진위 판별, 결제, 포인트 지급, 서버 업로드는 구현하지 않은 디자인 시연이다.
- 선택한 영수증·사진 파일은 저장·전송하지 않는다. 리뷰 텍스트와 시연 상태만 브라우저 localStorage에 저장한다. 초기화 가능하다.
- 검토 결과 버튼은 운영 정책을 보여주기 위한 명시적 시연 도구다. 실제 서비스에서는 운영자 권한과 서버 검증이 필요하다.
- 상품·브랜드·가격·리뷰·광고는 가상 예시다. 상품 그래픽은 직접 작성한 SVG 콘셉트 일러스트다.
- Pretendard 1.3.9를 CDN으로 불러오며, 연결되지 않으면 시스템 폰트로 표시한다. 폰트는 SIL Open Font License 1.1: https://github.com/orioncactus/pretendard

## 설계 근거와 AI 활용

`PROCESS.md` 참고. 기존 Figma 초안: https://www.figma.com/design/Z2X1rpUqJgrmRcha9BpFtr

