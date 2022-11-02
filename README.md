# ProjectName Kurly!
<img width="50%" src="https://blog.kakaocdn.net/dn/DKoEm/btqCXu4AZAW/1C2ln6Z0ovZiWYAJcYtqL1/img.jpg"/>

대한민국 유니콘기업의 선두주자 마켓컬리의 다양한 기능들을 클론코딩 하였습니다.

# 📌 링크
백엔드 <a href="www.cheolsu.shop">도메인</a> 링크

백엔드 <a href="www.cheolsu.shop/swagger">스웨거</a> 링크

<a href="https://resolute-wineberry-8e7.notion.site/7-SA-2-9bf1b1674334470787443e9e1172661c">Notion</a> 링크

# 🎬 프로젝트 소개
이번 클론 코딩 주차에 도달하기 전까지
주특기를 갈고닦기 위해 많은 시간을 쏟아 공부를 하고, 연습을 하였고
그로 인해 많은 기능을 구현할 수 있는 단계에 이르르게 되었다고 느끼게 되었습니다.
이 느낌이 단순한 느낌이 아니라 증명 가능한 실력임을 확인해 보기 위해 그동안 '배워온 것을 마음껏 사용해 볼 수 있는
클론 코딩 사이트가 무엇이 있을까?'를 고민하다가 수많은 데이터를 다루고 방대한 crud 프로세스를 가지고 있는
마켓 컬리를 선택하여 우리들의 능력을 시험해 보고 싶었습니다.             

# 🧙 Team
|이름|구현기능|설명|
|:------:|:---:|:---:|
|안태환|Cart,Question,Answer,SMS인증,Email인증,카카오톡,구글 소셜 로그인| 장바구니에 필요한 데이터처리와 상세페이지의 질문,답변 기능을 구현하고 회원가입시 필요한 SMS와 Email을 이용한 인증기능, 카카오톡과 구글을 이용한 소셜 로그인 기능을 구현했습니다. |
|정우성|reviews,goods|마켓컬리의 메인페이지와 상세페이지에 노출될 상품들의 전반적인 데이터들을 처리하기위한 프로세스를 구현하고 상세페이지의 리뷰 기능을 구현하였습니다. 또한 팀원들이 스웨거를 작성할수있도록 스웨거 골격을 구현하였습니다.|
|양태혁| auth-middleware,members|회원가입시 발생하는 다양한 밸리데이션을 적절히 배치하여 발생가능한 에러들을 핸들링하고, 로그인시 발급되는 accessToken, refreshToken을 이용하여 accessToken 탈취에 대비하는 전략을 통해 jwt인증 프로세스 구현하였습니다.|


# ⚙️ Dev Environment
- Server : AWS EC2(Ubuntu 20.04.4 LTS)
- Framework : Node.js (18.11.0)
- Database : MySQL (RDS) (2.3.3)


# 💥 Troubleshooting
- cheerio를 통하여 웹 크롤링을 시도하였으나 동적웹페이지 에서는 html뼈대만 긁어올뿐 실시간으로 할당되는 데이터를 가져오지 못하는 문제 발생.
추가적으로 동적웹페이지에 대응되는 모듈들을 조합하여 크롤링시도.

- 회원가입 구현중 밸리데이션 단계의 "사용가능한 아이디 입니다" 에서 통과가 되지 않는 문제 발생.
코드를 분석한 결과 불필요하게 반복적인 밸리데이션이 문제였으므로 해당부분 삭제하고 정상작동 확인.

# 🔐 ERD (Entity Relationship Diagram)
- 항해99 9기 2조 클론코딩(Market kurly)

<img width="100%" src="https://resolute-wineberry-8e7.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F74f3065a-dab2-4082-ba74-7e608f12a3cb%2FdrawSQL-export-2022-11-02_21_00.png?table=block&id=05a6b609-7149-4f6d-a7e3-5a5a20522817&spaceId=982d48db-b6c5-4f45-9967-13f4d847d738&width=2000&userId=&cache=v2"/>

# 📝 API (Application Programming Interface)
<a href="https://resolute-wineberry-8e7.notion.site/7-SA-2-9bf1b1674334470787443e9e1172661c">Notion API </a> 링크
