function mainFunction() {
      let usrText = document.getElementById("usrInp").value;
      let result = numCheck(usrText);
      console.log(result);
      function numCheck(str) {
            
            if(isNaN(str)) {
                  alert("Not a Number, Enter a valid Number");
            }
            else {
                  alert("You Have Entered A number")
            }
            
      }
}
