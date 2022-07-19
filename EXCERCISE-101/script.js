mainFunction = () => {
      let srtNum = Number(document.getElementById("usrNum1").value);
      let EndNum = Number(document.getElementById("usrNum2").value);
      let result = printRange(srtNum, EndNum);
      document.getElementById("myPara").innerHTML = `${result}`;
}
printRange = (num1, num2) => {
      if (num2 - num1 === 2) {
            return [num1 + 1];
      }
      else {
            let arr = printRange(num1, num2 - 1);
            arr.push(num2 - 1);
            return arr;
      }
}