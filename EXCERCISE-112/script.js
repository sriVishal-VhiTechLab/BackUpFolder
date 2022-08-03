mainFunction = () => {
      let usrArr = document.getElementById("usrArr").value;
      let splitArray = usrArr.split(' ');
      let numArray = splitArray.map(Number);
      let chunkValue = Number(document.getElementById("chunkNum").value);
      let resArray = arrayChunk(numArray, chunkValue);
}
arrayChunk = (arr, chunkVal) => {
      debugger;
      let tempArray = [];

      for (let i = 0; i < arr.length; i += chunkVal) {
            tempArray = arr.slice(i, i + chunkVal);
            let outPut = document.getElementById("myPara");
            outPut.innerHTML += tempArray + '<br>';
      }

}