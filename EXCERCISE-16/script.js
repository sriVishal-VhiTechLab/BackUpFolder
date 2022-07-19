function mainFunction() {
      let x = document.getElementById("txtInput").value;
      let convertedArray = strToArray(x);
      function strToArray(arr1) {
            let usrArray = [];
            for (let i of arr1) {
                  usrArray.push(i);
            }
            return usrArray.sort().toString();
            // toStirng() is a Number Method and also a built in method

            // The toString() method in Javascript is used 
            // with a number and converts the number to a string.
            
            //  It is used to return a string representing 
            //  the specified Number object.
      }
      console.log(convertedArray);

}