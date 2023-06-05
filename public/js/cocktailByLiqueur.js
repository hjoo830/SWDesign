let currentLiqueur = JSON.parse(sessionStorage.getItem("currentLiqueur")); // 선택한 양주 객체를 가져오기

// 선택한 양주로 만들 수 있는 칵테일들을 화면에 표시
currentLiqueur.cocktails.forEach((cocktail) => {
  // 칵테일 이름을 표시할 요소 생성
  let nameElement = document.createElement("p");
  nameElement.textContent = cocktail.name;

  // 이미지 요소를 생성하여 페이지에 추가
  let imgElement = document.createElement("img");
  imgElement.src = cocktail.imgSrc;
  imgElement.alt = cocktail.name;

  // 칵테일 이름과 사진을 감싸는 div 생성
  let cocktailDiv = document.createElement("div");
  cocktailDiv.className = "cocktail";
  cocktailDiv.appendChild(imgElement);
  cocktailDiv.appendChild(nameElement);

  // 생성한 div를 cocktailByLiqueur-container에 추가
  document
    .querySelector(".cocktailByLiqueur-container")
    .appendChild(cocktailDiv);
});
