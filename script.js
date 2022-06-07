let gridContainer = document.querySelector('.gridContainer');
let cellValue = document.querySelector('#cellSize');
let gridScale = cellValue.value; //set 16 x 16 grid as default

GenerateGrid(gridScale); //generate grid have sliding input to change call

function GenerateGrid(gridScale) { //generate grid function checks input grid scale and calculates required cells and the cell size. it will then generate cell divs based on number of cells
    
    let numberOfCells = gridScale * gridScale;
    let cellSize = gridContainer.clientWidth / gridScale;

    console.log(`Grid Scale = ${gridScale} \nNumber of Cells = ${numberOfCells} \nCell Size = ${cellSize}`);

    for (let i = 0; i < numberOfCells; i++) {
        let cell = document.createElement('div');
        // cell.style.backgroundColor ='blue';
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.style.outline = '1px solid black'; //remove styles when colour on click works
        gridContainer.appendChild(cell);
    }
}

