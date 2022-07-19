function mainFunction() {
      let result = printPrime(1000);
      
}
function printPrime(n) {
      for(i=0; i<n; i++){
            let PN =true;
            for(j=2; j<i; j++) {
                  if(i%j ===0){
                        PN= false;// Not an Prime Number.
                        break; 

                  }
            }
            if(i>1 && PN == true) {
                  console.log(i);
            }
      }
      
      
}