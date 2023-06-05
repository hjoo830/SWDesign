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
  const cocktailImage = document.getElementById("easyCocktail-image");
  const recipeElement = document.getElementById("recipe");
  const ingredientsElement = document.getElementById("ingredients");

  // 칵테일 이름 표시
  const nameElement = document.createElement("h1");
  nameElement.textContent = cocktail.name;
  cocktailImage.appendChild(nameElement);

  // 칵테일 사진 표시
  const imgElement = document.createElement("img");
  imgElement.src = cocktail.imgSrc;
  imgElement.alt = cocktail.name;
  cocktailImage.appendChild(imgElement);

  // 재료, 레시피
  ingredientsElement.textContent = `${cocktail.ingredients}`;
  recipeElement.innerHTML = `${cocktail.recipe.replace(/\n/g, "<br>")}`;
}

// 에러 메시지 표시
function displayErrorMessage() {
  const recipeContainer = document.getElementById("container");
  const errorMessage = document.createElement("p");
  errorMessage.textContent = "레시피를 표시할 수 없습니다.";
  recipeContainer.appendChild(errorMessage);
}
