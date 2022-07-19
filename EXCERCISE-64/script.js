function mainFunction() {
      let usrInpStr = document.getElementById("usrStr").value;
      let revStr = reverseStr(usrInpStr);
      document.getElementById("myPara").innerHTML= `The Reversed String is: ${revStr}`;
      console.log(usrInpStr.length)
}
function reverseStr(str) {
     
      let tempStr = ""; // creating a empty string
      for(let i =str.length-1; i>=0; i--) {
            tempStr+= str[i];
      }
      console.log(tempStr)
      return tempStr;
      
}



