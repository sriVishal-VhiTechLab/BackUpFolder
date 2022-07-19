function mainFunction() {
      let n = Number(document.getElementById("usrNum").value);
      let factorial = 1;
      if (n == 0 || n === 1) {
            document.getElementById("myPara").innerHTML = `factorial of ${n} is 1`;
      }
      
      else if (n < 0) {
            document.getElementById("myPara").innerHTML = `Enter a Valid Positive Integer Greater Than 1`;
      }
      else  {
            for (let i = 1; i <= n; i++) {
                  factorial *= i;

            }
            document.getElementById("myPara").innerHTML = `The Factorial Value Of This Number is ${factorial}`;

      }

}