const container = document.querySelector(".container");
function createGrid(rows, columns) {
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < columns; j++){
    let square = document.createElement('div');
    square.className = 'square';
    square.addEventListener('mouseover', changeColor);
    container.appendChild(square);
  }}}

  function changeColor() {
    this.style.backgroundColor = "blue";
  }

createGrid(16, 16);
