// ?? GLOBAL VARIABLES ??
let cells = document.querySelectorAll('.button-option');
let statusPopup = document.querySelector('.popup');
let restartBtn = document.getElementById('restart');
let newGameBtn = document.getElementById('new-game');
let statusText = document.getElementById('message');
const winPattern = [
      [0, 1, 2],
      [0, 3, 6],
      [2, 5, 8],
      [6, 7, 8],
      [3, 4, 5],
      [1, 4, 7],
      [0, 4, 8],
      [2, 4, 6],
];
// ! WINNER DECLARARTION FUNCTION 
const declareWinner = (letter) => {
      disableButtons();
      if (letter == 'X') {
            statusText.innerHTML = `${letter} Wins`;
      }
      else {
            statusText.innerHTML = `${letter} Wins`
      }
}
const disableButtons = () => {
      cells.forEach((element) => (element.disabled = true));
      statusText.classList.remove("hide");
}
// @ Player 'X' plays first 
let xTurn = true;
let count = 0;
// ! CHECK INNERTEXT OF EACH CELL 
const checkWinner = () => {
      for (let iterator of winPattern) {

            let [cell1, cell2, cell3] = [
                  cells[iterator[0]].innerText,
                  cells[iterator[1]].innerText,
                  cells[iterator[2]].innerText

            ]
            if (cell1 == "" && cell2 == "" && cell3 == "") {
                  if (cell1 == cell2 && cell2 == cell3) {
                        declareWinner(cell1);
                  }
            }
      }
}
// @ DISPLAY X/O ON CELLS
cells.forEach(Element => {
      Element.addEventListener('click', () => {
            debugger;
            if (xTurn) {
                  xTurn = false;
                  Element.innerHTML = 'X';
                  Element.disabled = true;
            }
            else {
                  xTurn = true;
                  Element.innerHTML = 'O';
                  Element.disabled = true;
            }
            count += 1;
            if (count === 9) {
                  // ?? DRAW FUNCTION.
                  drawGame();
            }
      })
      checkWinner();
})