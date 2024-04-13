let rows = Number(document.getElementById("rows").value);
let columns = Number(document.getElementById("columns").value);

let matrixCount = 0;

function updateMatrixValues() {
  rows = Number(document.getElementById("rows").value);
  columns = Number(document.getElementById("columns").value);
}

function GenerateMatrix() {
  updateMatrixValues();

  if (rows <= 0 || columns <= 0) {
    alert(
      "Can`t have a value that is less than or equal to 0. Set value to 1."
    );
    rows <= 0 ? (rows = 1) : null;
    columns <= 0 ? (columns = 1) : null;
  }

  const matrix = [];

  while (matrix.length !== rows) {
    const row = [];

    for (let i = 0; i < columns; i++) {
      row.push(Math.floor(Math.random() * 10 + 1));
    }
    matrix.push(row);
  }

  return matrix;
}

class Table {
  constructor() {
    this.tableWrapper = document.getElementById("table-wrapper");
  }

  addTable() {
    const newTable = document.createElement("table");
    this.tableWrapper.appendChild(newTable);
    this.lastTable = this.tableWrapper.lastElementChild;

    matrixCount++;
    this.addHeader();
  }
  addHeader() {
    const newHeader = document.createElement("caption");
    newHeader.innerText = "Matrix " + matrixCount;
    this.lastTable.appendChild(newHeader);
  }

  addRow() {
    const newRow = document.createElement("tr");
    this.lastTable.appendChild(newRow);

    this.lastRow = this.lastTable.lastElementChild;
  }
  addColumn(number) {
    const newColumn = document.createElement("td");
    newColumn.innerText = number;
    this.lastRow.appendChild(newColumn);

    this.lastColumn = this.lastRow.lastElementChild;
  }

  generate(matrix) {
    this.addTable();

    let size = rows * columns;

    let currentColumn = 0;
    let currentRow = 0;
    this.addRow();

    for (let i = 0; i < size; i++) {
      this.addColumn(matrix[currentRow][currentColumn]);
      currentColumn++;

      if (currentColumn === columns) {
        currentRow++;
        this.addRow();
        currentColumn = 0;
      }
    }
  }
}

function index() {
  const matrix = GenerateMatrix();

  const table = new Table();
  table.generate(matrix);
}
