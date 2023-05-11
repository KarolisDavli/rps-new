const app = document.getElementById("app");

// Grid container
const grid = document.createElement("div");
grid.className = "grid";

// Buttons
const gridBtn = document.createElement("button");
gridBtn.textContent = "Generate new grid";
gridBtn.addEventListener("click", makeGrid);

// Make Grid function
function makeGrid() {
  let size = prompt("How many squares on x and y axis");
  if (size > 32) {
    prompt("Maximum is 32");
    return;
  }
  clearGrid();
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.className = "square";
    square.addEventListener("mouseover", change);
    grid.append(square);
  }
}

// Clear existing grid
function clearGrid() {
  grid.innerHTML = "";
}
// Render grid
for (let i = 0; i < 256; i++) {
  grid.style.gridTemplateColumns = "repeat(16, 1fr)";
  const square = document.createElement("div");
  square.className = "square";
  square.addEventListener("mouseover", change);
  grid.append(square);
}

// Change color on hover
function change(e) {
  console.log("hey ho");
  e.target.style.backgroundColor = "green";
}

app.append(grid, gridBtn);
