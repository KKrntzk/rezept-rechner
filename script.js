// let inputnmb = document.getElementById("portions");

// function calculateIngredientQuantitiy() {
//   const ingredientAmount = document.querySelectorAll("ingredient-quantity");
//   const portionsNumber = document.getElementById(inputnmb.value);
//   fetch("./data.json").then((response) => {
//     return response.json();
//   });
//   for (let i = 0; i < 13; i++) {
//     let contentRef = document.getElementById("ingredient-quantity");
//     contentRef.innerHTML = "";
//     console.log(i);
//   }
// }

// for (let index = 0; index < ingredientAmount.length; index++) {
//   const element = ingredientAmount[index];
// }

//
//
//

let multiplier = document.getElementById("portions");

function calculateIngredientQuantitiy() {
  const ingredientAmount = document.querySelectorAll("ingredient-quantity");
  let result = ingredientAmount * multiplier;
  return result;
}
