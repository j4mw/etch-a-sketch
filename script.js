let gridContainer = document.querySelector(".gridContainer");
let cellValue = document.querySelector("#cellSize");
let modeSelector = document.querySelector(".modeSelector");
let penSelector = document.querySelector(".penSelector");

function init() {
  console.clear();
  clearGrid(gridContainer);
  let gridScale = cellValue.value; //set 16 x 16 grid as default
  GenerateGrid(gridScale); //generate grid have sliding input to change call
}

function clearGrid(gridContainer) {
  // function will clear all divs on grid
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

function GenerateGrid(gridScale) {
  //generate grid function checks input grid scale and calculates required cells and the cell size. it will then generate cell divs based on number of cells

  let numberOfCells = gridScale * gridScale;
  let cellSize = gridContainer.clientWidth / gridScale;

  console.log(
    `Grid Scale = ${gridScale} \nNumber of Cells = ${numberOfCells} \nCell Size = ${cellSize}`
  );

  for (let i = 0; i < numberOfCells; i++) {
    let cell = document.createElement("div");

    drawListener(cell);

    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    cell.style.outline = "1px solid rgb(0,0,0,0.1)"; //remove styles when colour on click works

    gridContainer.appendChild(cell);
  }
}

function colourCell(e) {
  e.target.style.backgroundColor = colourSelect();
}

function drawListener(cell) {
  cell.addEventListener("mousedown", (e) => colourCell(e));
  // this section ensures mouse is down before will draw.
  cell.addEventListener("mouseover", (e) => {
    if (e.buttons == 1) colourCell(e);
  });
  cell.addEventListener("mousedown", (e) => e.preventDefault());
}

function changeMode() {
  let modeCheck = document.getElementById("drawMode");
  if (modeCheck) {
    modeSelector.setAttribute("id", "eraseMode");
    modeSelector.textContent = "❌";
    // modeSelector.style.backgroundColor = "rgb(231, 91, 91)";
    return modeSelector.id;
  } else {
    modeSelector.setAttribute("id", "drawMode");
    modeSelector.innerText = "✏️";
    // modeSelector.style.backgroundColor = "rgb(107, 223, 107)";
    return modeSelector.id;
  }
}

function changePen() {
  let penCheck = document.querySelector(".penSelector");

  if (penCheck.id == "classicMode") {
    penSelector.setAttribute("id", "tintMode");
    penSelector.textContent = "TINT";
    console.log(penSelector.id);
    return penSelector.id;
  } else if (penCheck.id == "tintMode") {
    penSelector.setAttribute("id", "randomMode");
    penSelector.textContent = "RANDOM";
    console.log(penSelector.id);
    return penSelector.id;
  } else {
    penSelector.setAttribute("id", "classicMode");
    penSelector.textContent = "CLASSIC";
    console.log(penSelector.id);
    return penSelector.id;
  }
}
function random_rgba() {
  let o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
}

function colourSelect() {
  let colour;
  if (modeSelector.id == "drawMode") {
    if (penSelector.id == "classicMode") {
      colour = document.querySelector("#colourPicker").value;
      return colour;
    } else if (penSelector.id == "tintMode") {
    } else {
      colour = random_rgba();
      return colour;
    }
  } else {
    colour = gridContainer.style.backgroundColor;
    return colour;
  }
}

init();
