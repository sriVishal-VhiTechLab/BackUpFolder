mainFunction = () => {
      let srtNum = Number(document.getElementById("usrNum1").value);
      let EndNum = Number(document.getElementById("usrNum2").value);
      let result = printRange(srtNum, EndNum);
      document.getElementById("myPara").innerHTML = `${result}`;
}
const isRequired = value => value === '' ? false : true;

printRange = (num1, num2) => {
      if (isRequired(num1) || isRequired(num2)) {
            document.getElementById("myPara").innerHTML = "Please Fill In Values!";
      }
      if (num2 - num1 === 2) {
            return [num1 + 1];
      }
      if (num2 - num1 === 1) {
            document.getElementById("myPara").innerHTML = "Minimum Difference Must Be 2!";
      }
      else {
            const arr = printRange(num1, num2 - 1);
            arr.push(num2 - 1);
            return arr;
      }
}