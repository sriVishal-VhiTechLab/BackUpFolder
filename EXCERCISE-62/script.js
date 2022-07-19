function mainFunction() {
      let n = Number( document.getElementById("usrNum").value);
      let temp = n;//1 
      let sum = 0;
      let numberOfDigits = n.toString().length;
      while (temp > 0) {
            let remainder = temp % 10;// remainder = 1
            sum += remainder ** numberOfDigits; //1^3
            temp = parseInt(temp / 10);// 12
      }
      if (n === sum)/*Double equal two Explanation*/ {
            document.getElementById("myPara").innerHTML = `${n} is an Armstrong Number`;
      }
      else {
            document.getElementById("myPara").innerHTML = `${n} is Not an Armstrong Number`;

      }
}