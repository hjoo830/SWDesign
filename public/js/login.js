class Login {
  constructor(form) {
    this.form = form;
    this.form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  handleSubmit(event) {
    event.preventDefault();

    const username = this.form.id.value;
    const password = this.form.pw.value;

    if (!username || !password) {
      return alert("Please enter all information.");
    }

    // 서버로 로그인 요청 보내기
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.text())
      .then((data) => {
        if (data === "login succeed") {
          alert("login succeed");
          localStorage.setItem("username", username);
          window.location.href = "/main_userPage";
        } else {
          alert(data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

const loginForm = document.querySelector("#login-form");
new Login(loginForm);
