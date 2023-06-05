class EasyCocktail {
  constructor(name, imgSrc, ingredients, recipe) {
    this.name = name;
    this.imgSrc = imgSrc;
    this.ingredients = ingredients;
    this.recipe = recipe;
  }

  // 컨테이너에 간편 칵테일 추가
  addEasyCocktailToContainer(container) {
    const div = document.createElement("div");
    div.className = "easyCocktail";
    div.innerHTML = `
        <img src="${this.imgSrc}" alt="${this.name}">
        <span>${this.name}</span>
      `;

    div.addEventListener("click", () => {
      this.showRecipe();
    });

    container.appendChild(div);
  }
  // 간편 칵테일을 눌렀을 때 해당 간편 칵테일의 레시피를 보여주는 페이지로 이동
  showRecipe() {
    window.location.href = `easyRecipePage?cocktail=${encodeURIComponent(
      JSON.stringify(this)
    )}`;
    sessionStorage.setItem("currentCocktail", JSON.stringify(this));
  }
}

// 간편 칵테일 목록
const easyCocktails = [
  new EasyCocktail(
    "기범주",
    "/img/easyCocktail_img/기범주.PNG",
    "홍차, 얼음, 소주",
    "홍차 550ml에 얼음을 넣고 소주 한 병을 넣는다."
  ),
  new EasyCocktail(
    "링겔주",
    "/img/easyCocktail_img/링겔주.PNG",
    "매화수, 소주",
    "소주와 매화수를 각각 한잔씩 따라낸다.\n소주병 위로 매화수 병의 입구를 맞대게 세워준다."
  ),
  new EasyCocktail(
    "메로나주",
    "/img/easyCocktail_img/메로나주.PNG",
    "메로나, 사이다, 소주",
    "잔에 메로나 막대가 위로 가도록 꽂는다.\n소주와 사이다를 1:3 비율로 섞는다."
  ),
  new EasyCocktail(
    "모구모구주",
    "/img/easyCocktail_img/모구모구주.jpg",
    "소주, 모구모구",
    "소주와 모구모구를 2:8 비율로 섞는다."
  ),
  new EasyCocktail(
    "복사주",
    "/img/easyCocktail_img/복사주.PNG",
    "복분자, 사이다",
    "복분자와 사이다를 1:1.5 비율로 섞는다."
  ),
  new EasyCocktail(
    "블루레몬에이드주",
    "/img/easyCocktail_img/블루레몬에이드주.PNG",
    "밀키스, 블루레몬에이드, 소주",
    "밀키스 1.5잔, 블루레몬에이드 1.5잔, 소주 1잔을 넣고 섞는다."
  ),
  new EasyCocktail(
    "비타소주",
    "/img/easyCocktail_img/비타소주.PNG",
    "비타500, 소주",
    "비타500과 소주를 2:1 비율로 섞는다."
  ),
  new EasyCocktail(
    "이영지주",
    "/img/easyCocktail_img/이영지주.PNG",
    "보성 홍차 아이스티, 소주",
    "보성 홍차 아이스티와 소주를 2:1 비율로 섞는다."
  ),
  new EasyCocktail(
    "에너자이저주",
    "/img/easyCocktail_img/에너자이저주.PNG",
    "소주, 핫식스, 파워에이드, 얼음",
    "얼음을 채운 잔에 파워에이드, 핫식스, 소주를 2:2:1 비율로 섞는다."
  ),
  new EasyCocktail(
    "태극주",
    "/img/easyCocktail_img/태극주.PNG",
    "파워에이드, 홍초, 소주",
    "컵에 홍초와 소주를 섞어 1/3지점까지 부어준다.\n파워에이드를 홍초소주와 섞이지 않도록 조심스레 붓는다.\n아래는 빨강, 위는 파랑이 된 상태로 마신다."
  ),
];

// DOM 요소 가져오기
const easyCocktailContainer = document.querySelector(".easyCocktail-container");

// 모든 칵테일 추가
easyCocktails.forEach((easyCocktail) => {
  easyCocktail.addEasyCocktailToContainer(easyCocktailContainer);
});
