const container = document.querySelector('.container');

const gridBtn = document.querySelector('#newGrid');
let length;
gridBtn.addEventListener('click', () => {
  length = parseInt(prompt('How many squares per side?'));
  createGrid(length);
  addMouseoverEffect(color);
});

const colorBtn = document.querySelector('#changeColor');
let color = 'black';
colorBtn.addEventListener('click', () => {
  color = prompt('Enter color by name, hex code, or type \'random\' for a random color (must create new grid to see effect)');
  if (color === 'random') {
    color = '#' + Math.floor(Math.random()*16777215).toString(16);
  };
})

function createGrid(length) {
  // Clear current grid
  container.innerHTML = '';
  // Create length-many rows
  let borderLength = parseInt(length) * 2;
  let sideLength = `calc((100% - ${borderLength}px) / ${length})`;
  for (i = 0; i < length; i++) {
    let row = document.createElement('div');
    row.classList.toggle('row');
    row.style.height = sideLength;

    // Create cells for each row
    for (j = 0; j < length; j++) {
      let cell = document.createElement('div');
      cell.classList.toggle('cell');
      cell.style.width = sideLength;
      row.appendChild(cell);
    }

    container.appendChild(row);
  }
  document.body.appendChild(container);
}

function addMouseoverEffect(color) {
  const cells = Array.from(document.querySelectorAll('.cell'));
  cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = color;
    });
  });
};