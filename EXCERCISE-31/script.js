function mainFunction() {
      let usrInpStr = document.getElementById("usrInp").value;    
      let outStr = usrInpStr.charAt(0).toUpperCase() + usrInpStr.slice(0,1);
      document.getElementById("demo").innerHTML = "The Resultant String is : " + outStr;
      
}