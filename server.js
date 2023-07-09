const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const fs = require("fs"); 
const path = require("path");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('public'));


// 사용자 정보 파일 경로
const usersFilePath = path.join(__dirname, "users.json");

// 사용자 정보를 저장할 배열
let users = [];

// 사용자 정보 파일 로드
function loadUsersFromFile() {
  try {
    const data = fs.readFileSync(usersFilePath, "utf-8");
    users = JSON.parse(data);
  } catch (error) {
    console.error("Error loading users from file:", error);
  }
}

// 사용자 정보를 파일에 저장
function saveUsersToFile() {
  try {
    const data = JSON.stringify(users, null, 2);
    fs.writeFileSync(usersFilePath, data, "utf-8");
  } catch (error) {
    console.error("Error saving users to file:", error);
  }
}

// 서버 시작 시 사용자 정보 파일 로드
loadUsersFromFile();

// 렌더링
app.get('/signUpPage', (req, res) => {
  res.render('signUp.html');
})

app.get('/loginPage', (req, res) => {
  res.render('login.html');
})

app.get('/mainPage', (req, res) => {
  res.render('index.html');
})

app.get('/main_userPage', (req, res) => {
  res.render('main_user.html');
})

app.get('/cocktailPage', (req, res) => {
  res.render('cocktail.html');
})

app.get('/liqueurPage', (req, res) => {
  res.render('liqueur.html');
})

app.get('/easyCocktailPage', (req, res) => {
  res.render('easyCocktail.html');
})

app.get('/myCocktailPage', (req, res) => {
  res.render('myCocktail.html');
})

app.get('/recipePage', (req, res) => {
  res.render('recipe.html');
})

app.get('/easyRecipePage', (req, res) => {
  res.render('easyRecipe.html');
})

app.get('/cocktailByLiqueurPage', (req, res) => {
  res.render('cocktailByLiqueur.html');
})

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

// 회원가입
app.post("/signUp", (req, res) => {
  console.log("회원 가입 요청 받음");
  const username = req.body.id;
  const password = req.body.pw;
  const pwConfirm = req.body.pwConfirm;

  // 모든 필드가 채워졌는지 검사
  if (!username || !password || !pwConfirm) {
    res.write("<script>alert('Please enter all information.')</script>");
    return res.write("<script>window.location=\"/signUpPage\"</script>");
  }

  // 비밀번호와 비밀번호 확인이 일치하는지 검사
  if (password !== pwConfirm) {
    res.write("<script>alert('Passwords do not match. Please check again.')</script>");
    return res.write("<script>window.location=\"/signUpPage\"</script>");
  }

  // 이미 등록된 사용자인지 확인
  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    res.write("<script>alert('This ID already exists.')</script>");
    return res.write("<script>window.location=\"/signUpPage\"</script>");
  }

  // 새로운 사용자 생성
  const newUser = new User(username, password);
  users.push(newUser);

  // 사용자 정보를 파일에 저장
  saveUsersToFile();

  // 회원 가입 완료 메시지 전송
  res.write("<script>alert('Sign up is complete.')</script>");
  res.write("<script>window.location=\"/loginPage\"</script>");
});

// 로그인
app.post("/login", (req, res) => {
  console.log("로그인 요청 받음");
  const username = req.body.username;
  const password = req.body.password;

  // 파일에서 사용자 정보 로드
  fs.readFile(usersFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("파일 읽기 오류:", err);
      return res.status(500).send("server error.");
    }

    try {
      const users = JSON.parse(data);
      const user = users.find((user) => user.username === username);

      // 존재하는 사용자인지 검사
      if (!user) {
        return res.status(400).send("This user does not exist.");
      }

      // 비밀번호가 일치하는지 검사
      if (user.password !== password) {
        return res.status(400).send("Passwords do not match. Please check again.");
      }

      // 로그인 성공 메시지 전송
      res.send("login succeed");
    } catch (error) {
      console.error("JSON 파싱 오류:", error);
      return res.status(500).send("server error.");
    }
  });
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
