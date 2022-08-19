mainFunction = () => {
      let grid = [
            ['F', "K", "L", "M", "N", "T", "O", "P"],
            ["Q", "R", "S", "F", "U", "I", "W", "X"],
            ["Y", "Z", "H", "I", "T", "M", "L", "O"],
            ["T", "Q", "R", "H", "I", "E", "T", "F"],
            ["M", "N", "L", "K", "E", "J", "T", "O"],
            ["R", "I", "A", "P", "Q", "L", "F", "K"],
            ["C", "T", "C", "L", "F", "K", "L", "O"],
            ["A", "C", "D", "F", "L", "M", "N", "O"]
      ];
      let findWord = document.getElementById("getWordInp").value;
      findWord = findWord.toUpperCase();
      let result = locateChar(grid, findWord);
      if (result === true) {
            document.getElementById("myPara").innerHTML = `The Word Exists In the Grid.`;
      }
      else {
            document.getElementById("myPara").innerHTML = `Word Is Not Found!`;

      }
}
var locateChar = function (arr, word) {
      for (let row = 0; row < arr.length; row++) {
            for (let col = 0; col < arr[0].length; col++) {
                  if (arr[row][col] === word[0] && depthFirstSearch(row, col, 0)) return true;
            }
      }
      return false;

      function depthFirstSearch(r, c, i) {
            //Base Cond.
            if (word.length === i) return true;
            // Means That No letter is Left! in That Word.
            // Out Of Box Condition
            if (r < 0 || r >= arr.length || c < 0 || c >= arr[0].length || arr[r][c] !== word[i]) return false;
            // Keep Track Of Visited Cells.
            arr[r][c] = "#";
            //Cond. To Check Next Letter.
            // Check For The Pressence Of SubSequent Letter In All 4 Directions.
            if (depthFirstSearch(r + 1, c, i + 1) || depthFirstSearch(r - 1, c, i + 1) || depthFirstSearch(r, c + 1, i + 1) ||
                  depthFirstSearch(r, c - 1, i + 1)) {
                  return true;
            }
            arr[r][c] = word[i];
      }
}


