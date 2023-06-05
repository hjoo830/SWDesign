document.addEventListener("DOMContentLoaded", function () {
  const currentCocktail = sessionStorage.getItem("currentCocktail"); // 선택된 칵테일 정보 가져오기
  if (currentCocktail) {
    const cocktail = JSON.parse(currentCocktail);
    displayRecipe(cocktail);
  } else {
    displayErrorMessage();
  }
});

// 레시피 표시
function displayRecipe(cocktail) {
  const cocktailImage = document.getElementById("cocktail-image");
  const recipeElement = document.getElementById("recipe");
  const techniqueElement = document.getElementById("technique");
  const glassElement = document.getElementById("glass");
  const cocktailDetails = document.getElementById("cocktail-details"); // 추가

  // 칵테일 이름 표시
  const nameElement = document.createElement("h1");
  nameElement.textContent = cocktail.name;
  cocktailImage.appendChild(nameElement);

  // 칵테일 사진 표시
  const imgElement = document.createElement("img");
  imgElement.src = cocktail.imgSrc;
  imgElement.alt = cocktail.name;
  cocktailImage.appendChild(imgElement);

  // 레시피, 기법, 글래스 정보
  recipeElement.innerHTML = `${cocktail.recipe.replace(/\n/g, "<br>")}`;
  techniqueElement.textContent = `${cocktail.technique}`;
  glassElement.textContent = `${cocktail.glass}`;

  // 가니쉬가 있을 때만 실행
  if (cocktail.garnish) {
    const garnishContainer = document.createElement("div");
    garnishContainer.className = "cocktail-details";
    garnishContainer.id = "garnish-info";

    const garnishElement = document.createElement("p");
    garnishElement.textContent = `${cocktail.garnish}`;
    garnishContainer.appendChild(garnishElement);

    const garnishLabel = document.createElement("h3");
    garnishLabel.textContent = "가니쉬";
    garnishContainer.prepend(garnishLabel);

    cocktailDetails.appendChild(garnishContainer);
  }
}

// 에러 메시지 표시
function displayErrorMessage() {
  const recipeContainer = document.getElementById("container");
  const errorMessage = document.createElement("p");
  errorMessage.textContent = "레시피를 표시할 수 없습니다.";
  recipeContainer.appendChild(errorMessage);
}
