function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector("controls");
const inputNumberEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const divBoxesEl = document.getElementById("boxes");
divBoxesEl.style.display = "flex";
divBoxesEl.style.marginTop = "30px";
createBtnEl.addEventListener("click", () => {
  console.log(inputNumberEl.value);
  if (
    Number(inputNumberEl.value.trim()) > Number(inputNumberEl.max) ||
    Number(inputNumberEl.value.trim()) < Number(inputNumberEl.min)
  ) {
    alert("Please enter number from 1 to 100");
  } else {
    createBoxes(inputNumberEl.value.trim());
  }
  inputNumberEl.value = "";
});
function createBoxes(amount) {
  let divArray = [];
  let sizeDefault = 30;
  for (let i = 0; i < amount; i += 1) {
    sizeDefault += 10;
    const divElement = document.createElement("div");
    divElement.classList = "item";
    divElement.style.height = `${sizeDefault}px`;
    divElement.style.width = `${sizeDefault}px`;
    divElement.style.marginRight = "30px";
    divElement.style.marginBottom = "30px";
    divElement.style.backgroundColor = getRandomHexColor();
    divArray.push(divElement);
    divBoxesEl.appendChild(divElement);
  }
  return divBoxesEl.append(...divArray);
}
destroyBtnEl.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  inputNumberEl.value = "";
  divBoxesEl.innerHTML = "";
}
