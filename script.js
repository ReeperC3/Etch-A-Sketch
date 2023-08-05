const container = document.querySelector(".container");
let defaultSize = 16;
let currentMode = 'color';
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
function createGrid(rows, columns) {
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < columns; j++){
    let square = document.createElement('div');
    square.className = 'square';
    square.addEventListener('mouseover', changeColor)
    square.addEventListener('mousedown', changeColor)
    container.appendChild(square);
  }}}

  function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown ) return;
    if (currentMode === 'color') {
      e.target.style.backgroundColor = "blue";
    }
    
  }

  function gridSize(size = 16) {
    if (size <4 || size > 100) {
      console.log("ERROR - size too big or small") 
    } else {
      createGrid(size, size);
      container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
      container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    }
    
  }
window.onload = gridSize(defaultSize)


const changeSize = document.querySelector(".change-size");
changeSize.onchange = (e) => {gridSize(e.target.value)}

