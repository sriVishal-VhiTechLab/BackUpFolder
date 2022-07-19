function mainFunction() {
  let numberOfLines = Number(document.getElementById("usrInp").value);
  let str = "";
  for (let i = 1; i <= numberOfLines; i++) {
    for (let j = 1; j <= numberOfLines - i; j++) {
      str += "&nbsp&nbsp";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      str += "*";
    }
    str += "<br/>";
  }
  for (i = numberOfLines - 1; i > 0; i--) {
    for (j = i; j < numberOfLines; j++) {
      str += "&nbsp&nbsp";
    }
    for (k = 2 * i - 1; k > 0; k--) {
      str += "*";
    }
    str += "<br/>";
  }
  document.getElementById("myPara").innerHTML = str;
}
