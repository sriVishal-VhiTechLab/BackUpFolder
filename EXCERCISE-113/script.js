mainFunction = () => {
      let usrArr = document.getElementById("usrArr").value;
      splitArray = usrArr.split(' ');
      let tempArray;
      arrOfNum = splitArray.map(Number);
      let sumVal = Number(document.getElementById("sumVal").value);
      let result = findArrPairs(arrOfNum, sumVal);
}
findArrPairs = (arr, sumValue) => {
      let len = arr.length;
      let output;
      for (let i = 0; i <= len - 1; i++) {
            for (let j = i + 1; j < len; j++) {
                  if (arr[i] + arr[j] === sumValue) {
                        output = document.getElementById("myPara");
                        output.innerHTML += "[" + arr[i] + "," + arr[j] + "]" + '<br>';
                  }
            }
      }
}