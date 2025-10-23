function calculateIngredientQuantity() {
  let multiplier = parseFloat(document.getElementById("portions").value);
  const rows = document.getElementsByClassName("ingredient-quantity");
  const defaultPortions = document
    .getElementById("portions")
    .getAttribute("placeholder");
  if (multiplier < 0) {
    multiplier = 1;
    document.getElementById("portions").value = 1;
  }
  if (multiplier > 20) {
    multiplier = 20;
    document.getElementById("portions").value = 20;
  }
  for (let index = 0; index < rows.length; index++) {
    const defaultIngredientAmount =
      parseFloat(rows[index].getAttribute("placeholder")) || 0;
    rows[index].textContent =
      (defaultIngredientAmount / defaultPortions) * multiplier;
  }
}
