mainFunction = () => {
      usrArray = document.getElementById("usrArr").value;
      let splitArray = usrArray.split(" ");
      let result = sumOfArray(splitArray);
      document.getElementById("myPara").innerHTML = `${result}`
}
sumOfArray = (Array) => {
      let temp = 0;
      Array.map(ele => { temp += Number(ele); });
      return temp;
}
