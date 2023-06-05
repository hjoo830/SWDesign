// 모달 창 열기
const addCocktailButton = document.querySelector(".myCocktailAdd");
const modal = document.getElementById("addCocktailModal");
const closeIcon = document.querySelector(".close");

addCocktailButton.addEventListener("click", () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // 스크롤 방지
});

closeIcon.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // 스크롤 가능
});

// 모달 외부 클릭 시 닫기
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // 스크롤 가능
  }
});

const addCocktailForm = document.getElementById("addCocktailForm"); // 폼 제출 시 처리
const userId = getCurrentUserId(); // 현재 사용자 ID 가져오기

class MyCocktail {
  constructor(name, recipe, image) {
    this.id = Date.now();
    this.name = name;
    this.recipe = recipe;
    this.image = URL.createObjectURL(image);
  }
}

addCocktailForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const recipe = document.getElementById("recipe").value;
  const image = document.getElementById("image").files[0];

  const myCocktail = new MyCocktail(name, recipe, image); // 새로운 나만의 칵테일 객체 생성
  displayCocktail(myCocktail); // 생성한 객체를 화면에 표시
  modal.style.display = "none"; // 모달 창 닫기
  addCocktailForm.reset(); // 폼 초기화

  const savedCocktails = getSavedCocktailsByUserId(userId) || []; // 저장된 객체들 가져오기
  savedCocktails.push(myCocktail); // 새로운 객체 추가
  saveCocktailsByUserId(userId, savedCocktails); // 저장된 객체들 Local Storage에 저장
});

// 화면 로드 시 저장된 객체들 표시
window.addEventListener("DOMContentLoaded", () => {
  const savedCocktails = getSavedCocktailsByUserId(userId) || []; // 저장된 객체들 가져오기

  // 저장된 객체들 화면에 표시
  savedCocktails.forEach((cocktail) => {
    displayCocktail(cocktail);
  });
});

// 사용자별로 저장된 객체들 가져오기
function getSavedCocktailsByUserId(userId) {
  const savedData = JSON.parse(localStorage.getItem("savedCocktails")) || {};
  return savedData[userId];
}

// 사용자별로 저장된 객체들 저장하기
function saveCocktailsByUserId(userId, cocktails) {
  const savedData = JSON.parse(localStorage.getItem("savedCocktails")) || {};
  savedData[userId] = cocktails;
  localStorage.setItem("savedCocktails", JSON.stringify(savedData));
}

// 현재 사용자 ID 가져오기
function getCurrentUserId() {
  var username = localStorage.getItem("username");
  return username || ""; 
}

// 칵테일 표시
function displayCocktail(myCocktail) {
  const container = document.querySelector(".myCocktail-container");

  const cocktailElement = document.createElement("div");
  cocktailElement.classList.add("myCocktail");
  cocktailElement.dataset.id = myCocktail.id;

  const imageElement = document.createElement("img");
  imageElement.src = myCocktail.image;
  imageElement.alt = myCocktail.name;

  const infoElement = document.createElement("div");
  infoElement.classList.add("cocktail-info");

  const nameElement = document.createElement("h3");
  nameElement.innerText = myCocktail.name;

  const recipeElement = document.createElement("p");
  recipeElement.innerText = myCocktail.recipe;

  // 칵테일 삭제 버튼
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-cocktail");

  // 칵테일 삭제 아이콘
  const deleteIcon = document.createElement("img");
  deleteIcon.src = "/img/myCocktail_img/trash_can.png";
  deleteIcon.alt = "Delete";
  deleteIcon.classList.add("delete-cocktail-icon");

  infoElement.appendChild(nameElement);
  infoElement.appendChild(recipeElement);

  cocktailElement.appendChild(imageElement);
  cocktailElement.appendChild(infoElement);
  deleteButton.appendChild(deleteIcon);
  deleteButton.insertAdjacentText("beforeend", "삭제");
  cocktailElement.appendChild(deleteButton);
  container.appendChild(cocktailElement);
}

modal.style.display = "none"; // 모달 창 숨기기

// 객체 삭제 이벤트 리스너 등록
document.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("delete-cocktail") ||
    event.target.classList.contains("delete-cocktail-icon")
  ) {
    // 삭제 글자를 눌렀거나 삭제 아이콘을 눌렀을 때
    const cocktailElement = event.target.closest(".myCocktail");
    const cocktailId = cocktailElement.dataset.id;

    deleteCocktail(cocktailId); // 칵테일 객체 삭제
    cocktailElement.remove(); // 화면에서 객체 제거
  }
});

// 칵테일 객체 삭제
function deleteCocktail(cocktailId) {
  const userId = getCurrentUserId(); // 현재 사용자 ID 가져오기
  const savedCocktails = getSavedCocktailsByUserId(userId) || []; // 사용자의 저장된 칵테일들 가져오기

  // 해당 ID를 가진 객체를 찾아서 삭제
  const updatedCocktails = savedCocktails.filter(
    (cocktail) => cocktail.id !== parseInt(cocktailId)
  );

  saveCocktailsByUserId(userId, updatedCocktails); // 저장된 객체들 로컬 스토리지에 업데이트하여 저장
}
