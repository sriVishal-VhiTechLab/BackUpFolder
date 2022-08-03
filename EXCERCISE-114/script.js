mainFunction = () => {
      let usrStr = document.getElementById("usrStr").value;
      let usrLimit = Number(document.getElementById("usrLimit").value);
      let result = splitStr(usrStr, usrLimit);
      document.getElementById("myPara").innerHTML = `${result}`;
}
splitStr = (str, limit) => {
      let returnStr = str.split(' ', limit);
      return returnStr;
}