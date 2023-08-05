const container = document.querySelector(".container");
let defaultSize = 16;
let defaultMode = 'color';
let currentMode = defaultMode;
let defaultColor = 'black';
const rainbow = document.querySelector('.rainbow');
const colorPicker = document.querySelector('.color');
const colorBtn = document.querySelector('.color-btn');
const rubber = document.querySelector('.rubber');
const clear = document.querySelector('.clear');
let mouseDown = false
let color = defaultColor;

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
colorPicker.oninput = (e) => setCurrentColor(e.target.value);
rainbow.onclick = () => setCurrentMode('rainbow');
colorBtn.onclick = () => setCurrentMode('color');
rubber.onclick = () => setCurrentMode('rubber');
clear.onclick = () => clearGrid();

function clearGrid() {
  container.innerHTML = '';
  gridSize(defaultSize);
}

function setCurrentMode(newMode) {
  currentMode = newMode;
}

function createGrid(rows, columns) {
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < columns; j++){
    let square = document.createElement('div');
    square.className = 'square';
    square.addEventListener('mouseover', changeColor)
    square.addEventListener('mousedown', changeColor)
    container.appendChild(square);
  }}}

  function setCurrentColor(newColor) {
    color = newColor;
  }

  function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown ) return;
    if (currentMode === 'color') {
      e.target.style.backgroundColor = color;
    } else if (currentMode === 'rainbow') {
      let randomR = Math.floor(Math.random() * 256);
      let randomG = Math.floor(Math.random() * 256);
      let randomB = Math.floor(Math.random() * 256);
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'rubber') {
      e.target.style.backgroundColor = 'white';
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

