class SignUp {
  constructor(form) {
    this.form = form;
    this.form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  handleSubmit(event) {
    event.preventDefault();

    const username = this.form.id.value;
    const password = this.form.pw.value;

    if (!username || !password) {
      return alert("모든 필드를 입력해주세요.");
    }

    // 서버로 회원가입 요청 보내기
    fetch("http://localhost:3001/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

const signUpForm = document.querySelector("#signUp-form");
new SignUp(signUpForm);
