mainFunction = () => {
      let number1 = Number(document.getElementById("usrNum1").value);
      let number2 = Number(document.getElementById("usrNum2").value);
      let result = highestCommonFactor(number1, number2);
}
highestCommonFactor = (num1, num2) => {
      let res;
       for (let i = 1; i <= num1 && i <= num2; i++) { 
            // @ finding the greatest number which divides both
            if (num1 % i == 0 && num2 % i == 0) {
                  res = i;
            }
      }
      document.getElementById("myPara").innerHTML = `The HCF Value is : ${res}`;
}