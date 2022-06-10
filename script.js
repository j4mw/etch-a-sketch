let gridContainer = document.querySelector('.gridContainer');
let cellValue = document.querySelector('#cellSize');


function init() {   
    console.clear();
    clearGrid(gridContainer);
    let gridScale = cellValue.value; //set 16 x 16 grid as default
    GenerateGrid(gridScale); //generate grid have sliding input to change call
}


function clearGrid(gridContainer) { // function will clear all divs on grid
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function GenerateGrid(gridScale) { //generate grid function checks input grid scale and calculates required cells and the cell size. it will then generate cell divs based on number of cells
    
    let numberOfCells = gridScale * gridScale;
    let cellSize = gridContainer.clientWidth / gridScale;

    console.log(`Grid Scale = ${gridScale} \nNumber of Cells = ${numberOfCells} \nCell Size = ${cellSize}`);

    for (let i = 0; i < numberOfCells; i++) {

        let cell = document.createElement('div');
        
        // this section ensures mouse is down before will draw. PROBLEM with first cell not drawing
        cell.addEventListener('mouseover', e => {
            if (e.buttons == 1) colourCell(e);
        });
        cell.addEventListener('mousedown', e => e.preventDefault()); // prevent default stops cannot drag pointer issue.

        
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.style.outline = '1px solid rgb(0,0,0,0.1)'; //remove styles when colour on click works
 
        gridContainer.appendChild(cell);
    }
}

function colourCell(e) {
    e.target.style.backgroundColor = 'cadetblue';
}

init();








