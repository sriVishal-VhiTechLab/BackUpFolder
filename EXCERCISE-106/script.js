mainFunction = () => {
      let usrArr = document.getElementById("usrArr").value;
      let splitArray = usrArr.split(" ");
      let result = extractUnique(splitArray);
      document.getElementById("myPara").innerHTML = result;
}
extractUnique = (arr) => {
      debugger
      let uniqueArray = [];
      for (let i = 0; i < arr.length; i++) {
            if (uniqueArray.includes(arr[i]) === false) {
                  uniqueArray.push(arr[i]);
            }
      }
      return uniqueArray;
}
