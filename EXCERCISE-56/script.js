function mainFunction() {
      let usrNum = Number(document.getElementById("num1").value);
      let result = checkForPrime(usrNum);
   
}
function checkForPrime(n) {
      for(i=0; i<=n; i++){
            let PN =true;
            for(j=2; j<i; j++) {
                  if(i%j ===0){
                        PN= false;// Not an Prime Number.
                        break; 

                  }
            }
            if(i>1 && PN == true) {
                  document.getElementById("myPara").innerHTML = `${i} is a Prime Number`;
            }
            else {
                  document.getElementById("myPara").innerHTML = `${i} is Non Prime Number`;
            }
      }
}