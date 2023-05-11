const app = document.getElementById("app");

const grid = document.createElement("div");
grid.className = "grid";

for (let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.className = "square";
  grid.append(square);
}

app.append(grid);
