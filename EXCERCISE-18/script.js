function mainFunction() {
      let usrInpArr = document.getElementById("usrArr").value;
      let convertedArray = convertArray(usrInpArr);
      let lastWord = lastItem(convertedArray);
      console.log(lastWord);
      function convertArray(arr) {
            let tempArray = [];
            for (i = 0; i < arr.length; i += 1) {
                  if (arr[i] !== ",") {
                        tempArray[tempArray.length - 1] += arr[i];
                  }
                  else {
                        tempArray.push("");
                  }
            }
            return tempArray;
      }
      function lastItem(x) {
            return x[x.length-1];
      }
}

