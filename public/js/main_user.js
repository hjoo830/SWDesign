class Main_user {
  constructor() {
    window.onload = () => {
      this.setupEventListeners();
    };
  }

  setupEventListeners() {
    // 칵테일 버튼 클릭 시 이벤트 처리
    const cocktailBtn = document.querySelector(".cocktail");
    cocktailBtn.addEventListener("click", () => {
      window.location.href = "/cocktailPage";
      console.log("zmfflr");
    });

    // 양주 버튼 클릭 시 이벤트 처리
    const liqueurBtn = document.querySelector(".liqueur");
    liqueurBtn.addEventListener("click", () => {
      window.location.href = "/liqueurPage";
    });

    // 간편칵테일 버튼 클릭 시 이벤트 처리
    const easyCocktailBtn = document.querySelector(".easyCocktail");
    easyCocktailBtn.addEventListener("click", () => {
      window.location.href = "/easyCocktailPage";
    });

    // 나만의 칵테일 버튼 클릭 시 이벤트 처리
    const myCocktailBtn = document.querySelector(".myCocktail");
    myCocktailBtn.addEventListener("click", () => {
      window.location.href = "/myCocktailPage";
    });
  }
}

new Main_user();
