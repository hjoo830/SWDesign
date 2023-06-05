class Liqueur {
  constructor(name, imgSrc, cocktails) {
    this.name = name;
    this.imgSrc = imgSrc;
    this.cocktails = cocktails.map((cocktail) => {
      return {
        name: cocktail[0], 
        imgSrc: cocktail[1], 
      };
    });
  }

  // 양주 눌렀을 때 해당 양주로 만들 수 있는 칵테일들의 목록을 보여주는 페이지로 이동
  showCocktails() {
    window.location.href = `cocktailByLiqueurPage?liqueur=${encodeURIComponent(
      JSON.stringify(this)
    )}`;
    sessionStorage.setItem("currentLiqueur", JSON.stringify(this));
  }

  // 컨테이너에 양주 추가
  addLiqueurToContainer(container) {
    const div = document.createElement("div");
    div.className = "liqueur";
    div.innerHTML = `
        <img src="${this.imgSrc}" alt="${this.name}">
        <span>${this.name}</span>
      `;

    div.addEventListener("click", () => {
      this.showCocktails();
    });

    container.appendChild(div);
  }
}

// 양주 목록
const liqueurs = [
  new Liqueur("깔루아", "/img/liqueur_img/깔루아.PNG", [
    ["블랙러시안", "/img/cocktail_img/블랙 러시안.jpg"],
    ["화이트러시안", "/img/cocktail_img/화이트러시안.PNG"],
    ["깔루아밀크", "/img/cocktail_img/깔루아밀크.PNG"],
    ["에스프레소 마티니", "/img/cocktail_img/에스프레소 마티니.jpg"],
    ["금산", "/img/cocktail_img/금산.jpg"],
  ]),
  new Liqueur("데킬라", "/img/liqueur_img/데킬라.PNG", [
    ["데킬라 선라이즈", "/img/cocktail_img/데킬라 선라이즈.png"],
    ["롱아일랜드아이스티", "/img/cocktail_img/롱아일랜드아이스티.PNG"],
    ["마가리타", "/img/cocktail_img/마가리타.PNG"],
    ["블루 마가리타", "/img/cocktail_img/블루 마가리타.PNG"],
  ]),
  new Liqueur("말리부", "/img/liqueur_img/말리부.PNG", [
    ["옥보단", "/img/cocktail_img/옥보단.jpg"],
    ["준벅", "/img/cocktail_img/준벅.jpg"],
    ["블루 사파이어", "/img/cocktail_img/블루 사파이어.PNG"],
    ["블루 하와이안", "/img/cocktail_img/블루 하와이안.PNG"],
  ]),
  new Liqueur("애플 퍼커", "/img/liqueur_img/애플 퍼커.PNG", [
    ["금산", "/img/cocktail_img/금산.jpg"],
    ["풋사랑", "/img/cocktail_img/풋사랑.PNG"],
    ["애플마티니", "/img/cocktail_img/애플마티니.PNG"],
  ]),
  new Liqueur("미도리", "/img/liqueur_img/미도리.PNG", [
    ["준벅", "/img/cocktail_img/준벅.jpg"],
    ["미도리 사워", "/img/cocktail_img/미도리 사워.PNG"],
  ]),
  new Liqueur("블루 큐라소", "/img/liqueur_img/블루 큐라소.PNG", [
    ["블루 마가리타", "/img/cocktail_img/블루 마가리타.PNG"],
    ["블루 사파이어", "/img/cocktail_img/블루 사파이어.PNG"],
    ["블루 하와이안", "/img/cocktail_img/블루 하와이안.PNG"],
    ["블루문", "/img/cocktail_img/블루문.PNG"],
  ]),
  new Liqueur("피치트리", "/img/liqueur_img/피치트리.PNG", [
    ["블루 사파이어", "/img/cocktail_img/블루 사파이어.PNG"],
    ["섹스온더비치", "/img/cocktail_img/섹스온더비치.PNG"],
    ["옥보단", "/img/cocktail_img/옥보단.jpg"],
    ["퍼지 네이블", "/img/cocktail_img/퍼지 네이블.PNG"],
    ["피치 크러쉬", "/img/cocktail_img/피치 크러쉬.PNG"],
  ]),
];

// DOM 요소 가져오기
const liqueurContainer = document.querySelector(".liqueur-container");

// 모든 양주 추가
liqueurs.forEach((liqueur) => {
  liqueur.addLiqueurToContainer(liqueurContainer);
});
