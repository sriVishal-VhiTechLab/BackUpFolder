function createTable() {
      let rowCount = Number(document.getElementById("rowCount").value);
      let colCount = Number(document.getElementById("colCount").value);
      for (var r = 0; r < rowCount; r++) {
            var insertRowInTable = document.getElementById('gridTable').insertRow(r);
            for (var c = 0; c < colCount; c++) {
                  var y = insertRowInTable.insertCell(c);
            }
      }
      let initRow = 0;
      let initCol = 0;
      colorTheCell(initRow, initCol);
      let pathInput = document.getElementById("path").value;
      for (let i = 0; i < pathInput.length; i++) {
            if (pathInput.charAt(i) === 'r' || pathInput.charAt(i) === 'R') {
                  colorTheCell(initRow, initCol++);
            }
            if (pathInput.charAt(i) === 'b' || pathInput.charAt(i) === 'B') {
                  colorTheCell(initRow++, initCol);
            }
            if (pathInput.charAt(i) === 'l' || pathInput.charAt(i) === 'L') {
                  colorTheCell(initRow, initCol--);
            }
            if (pathInput.charAt(i) === 'u' || pathInput.charAt(i) === 'U') {
                  colorTheCell(initRow--, initCol);
            }
      }
}
function colorTheCell(rowIndex, colIndex) {
      let colorTheCell = document.getElementById('gridTable').rows[rowIndex].cells[colIndex].style.backgroundColor = "red";
}