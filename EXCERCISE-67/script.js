function mainFunction() {
  let numberOfLines = Number(document.getElementById("usrInp").value);
  if (numberOfLines % 2 === 0) {
    alert(`Enter A Valid Positive Integer`);
  } else {
    let str = "";
    for (let i = 1; i <= numberOfLines; i += 2) {
      for (let j = 1; j <= i; j++) {
        str += j;
      }
      str += "<br/>";
    }
    for (i = numberOfLines; i > 1; i -= 2) {
      for (j = 1; j < i - 1; j++) {
        str += j;
      }
      str += "<br/>";
    }
    document.getElementById("myPara").innerHTML = `${str}`;
  }
}
