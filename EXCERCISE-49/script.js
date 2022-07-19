function mainFunction() {
      let usrStr = document.getElementById("usrInpStr").value;
      let outPutArr = splitString(usrStr);
      console.log(outPutArr);
      function splitString(arr) {
            let tempArray = [""];
            for (let i = 0; i < arr.length; i++) {
                  if (arr[i] !== " ") {
                        tempArray[tempArray.length - 1] += arr[i]; // i am printing the 
                        //arr[i] for the length of tempArray
                        // tempArray length increases by 1 for every Word we Enter.
                        // space Doesnt increase the temparray length
                  }
                  else {
                        tempArray.push("");
                  }

            }
            return tempArray;
      }
}