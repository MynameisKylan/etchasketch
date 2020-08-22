const container = document.createElement('div');
container.classList.toggle('container');

// Create 16 rows
for (i = 0; i < 16; i++) {
  let row = document.createElement('div');
  row.classList.toggle('row');

  // Create cells for each row
  for (i = 0; i < 16; i++) {
    let cell = document.createElement('div');
    cell.classList.toggle('cell');
    row.appendChild(cell);
  }

  container.appendChild(row);
}
document.body.appendChild(container);
