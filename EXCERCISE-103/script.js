mainFunction = () => {
      let usrArr = document.getElementById("usrArr").value;
      let findWord = Number(document.getElementById("usrFind").value);
      let usrInp = usrArr.split(' ');
      let sortedArray = sortArray(usrInp);
      let arrOfNum = sortedArray.map(Number);
      let result = binSearchArray(arrOfNum, findWord);
      console.log(result);
      if (result === false) {
            document.getElementById("myPara").innerHTML = `${findWord} is Not Found In the Array.`;

      }
      else {
            document.getElementById("myPara").innerHTML = `${findWord} is Found In the Array`;
      }
}
sortArray = (arr) => {
      let len = arr.length;
      for (i = 0; i < len; i++) {
            for (j = 0; j < len - 1; j++) {
                  if (Number(arr[j]) > Number(arr[j + 1])) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                  }
            }
      }
      return arr;
}
binSearchArray = (arr1, searchNum) => {
      debugger;
      let srtNum = 0, endNum = arr1.length - 1, midNum;
      midNum = Math.floor((endNum - srtNum) / 2);
      while (srtNum <= endNum) {
            if (searchNum === arr1[midNum]) {
                  return searchNum;
            }
            else if (searchNum > arr1[midNum]) {

                  srtNum = midNum + 1;
            }
            else {
                  endNum = midNum - 1;
            }
            midNum = Math.floor((endNum - srtNum) / 2);

      }
      return false;
}
