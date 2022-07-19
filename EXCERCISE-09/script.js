function mainFunction() {
      let usrStr = document.getElementById("usrStrInp").value;
      
      let result = revStrg(usrStr);
      function revStrg(str) {
            let a = "";
            for (let i = str.length-1; i >= 0; i--) {
                  a += str[i];
            }
            return a;
      }
console.log(result)
}