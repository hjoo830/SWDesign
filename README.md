# SWDesign
## 오늘 한 잔
### Use case
1. 회원가입
2. 로그인
3. 로그아웃
4. 칵테일 목록
5. 선택한 칵테일 레시피
6. 양주 목록
7. 선택한 양주로 만들 수 있는 칵테일 목록
8. 간편 칵테일 목록
9. 선택한 간편 칵테일 레시피
10. 나만의 칵테일 등록
11. 나만의 칵테일 목록

### 실행방법
* 압축폴더 내의 SWDesign 폴더를  VSCode로 연다.
* 터미널에 node server.js 를 입력한다.
```
node server.js
```
 *nodemon이 설치되어 있는 경우 터미널에 nodemon start 를 입력해도 된다.*
 ```
 nodemon start
 ```
* 크롬을 열어서 주소창에 http://localhost:3001/mainPage 을 입력한다.
 
### 사용방법
* 메인 화면에서 칵테일 버튼을 누르면 칵테일 목록을 볼 수 있으며, 칵테일을 클릭하면 선택한 칵테일의 레시피를 볼 수 있다.
* 메인 화면에서 양주 버튼을 누르면 양주 목록을 볼 수 있으며, 양주를 클릭하면 선택한 양주로 만들 수 있는 칵테일 목록을 볼 수 있다.
* 메인 화면에서 간편 칵테일 버튼을 누르면 간편 칵테일 목록을 볼 수 있으며, 간편 칵테일을 클릭하면 선택한 간편 칵테일의 레시피를 볼 수 있다.
* 메인 화면에서 나만의 칵테일 버튼을 누르면 로그인이 필요한 기능이기 때문에 로그인 화면으로 넘어간다. 로그인한 상태로 누른다면 등록해놓은 나만의 칵테일 목록을 볼 수 있으며, 우측 상단의 추가하기 버튼을 누르면 나만의 칵테일을 추가할 수 있는 모달창이 뜬다. 이름, 레시피, 사진을 입력 후 추가하기 버튼을 누르면 나만의 칵테일이 등록된다. 삭제하기 버튼을 누르면 삭제된다.
* 메인 화면에서 로그인 버튼을 누르면 로그인 화면이 뜨고, 로그인 화면에서 회원가입 버튼을 누르면 회원가입 화면이 뜬다. 
