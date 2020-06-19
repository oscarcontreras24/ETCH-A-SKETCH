/*
input: int col int row
output: side effect

This function takes in two parameters to create a grid based off of those
paramenters.
*/
function createGrid(row, col) {
  // assigns the grid rows/cols to the user input (16 by default)
  mainContainer.style['grid-template-rows'] = `repeat(${row}, 1fr)`;
  mainContainer.style['grid-template-columns'] = `repeat(${col}, 1fr)`;
  // loops over all squares within the grid and creates a square for each
  for (let i = 0; i < row * col; i++) {
    gridCell = document.createElement('div');
    // adds mouse over event listener to each cell created
    gridCell.addEventListener('mouseenter', changeColor);
    gridCell.classList.add('gridCell');
    mainContainer.appendChild(gridCell);
  }
}

/*
Input: target selector
output: side effect

Every time a grid cell elment is hovered over the background color for the cell will change
*/
function changeColor(e) {
  this.classList.add('colorChange');
}

/*
Input:
Output:

This function is called each time the rest button is clicked, it loops through
all created gridCell elements and then for each it removes the color change class
*/
function resetGrid() {
  // document.querySelectorAll('.gridCell') => node list (arr) of all grids in etch a sketch
  for (let i = 0; i < document.querySelectorAll('.gridCell').length; i++) {
    document.querySelectorAll('.gridCell')[i].classList.remove('colorChange');
  }
  clearGrid();
  row = prompt("Please enter new size for grid");
  col = row;
  createGrid(row, col);
}

// clears all div elements in the main container to prevent over creation
function clearGrid () {
  mainContainer.innerHTML = '';
}


const mainContainer = document.querySelector('#mainContainer');
const resetButton = document.querySelector('#reset');
var gridCell;
// make this a prompt button to ask when clicked.
let row = 16;
let col = row;

resetButton.addEventListener('click', resetGrid);

createGrid(row, col);
