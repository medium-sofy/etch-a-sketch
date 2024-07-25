const container = document.querySelector(".container");
const button = document.querySelector("button");
let gridSize = 0;
let pixels = "";
// initial 16x16 grid
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    let div = document.createElement("div");
    div.classList.add("pixel");
    div.style.cssText = `flex-basis: ${500 / 16 - 2}px; height: ${
      500 / 16 - 2
    }px`;
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "red";
    });
    container.appendChild(div);
  }
}

// computed grid based on user input
button.addEventListener("click", () => {
  gridSize = +prompt("Enter the new size of the canvas");
  container.innerHTML = "";
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let div = document.createElement("div");
      div.classList.add("pixel");
      div.style.cssText = `flex-basis: ${Math.ceil(
        500 / gridSize - 2
      )}px; height: ${Math.ceil(500 / gridSize - 2)}px`;
      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "red";
      });
      container.appendChild(div);
    }
  }
});
