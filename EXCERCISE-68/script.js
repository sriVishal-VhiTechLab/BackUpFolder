function mainFunction() {
  let numberOfLines = Number(document.getElementById("usrInp").value);
  let str = "";
  // i for Lines, j for Spaces, k for Stars
  for (let i = 1; i <= numberOfLines; i++) {
    for (let j = 1; j <= numberOfLines - i; j++) {
      str += "&nbsp&nbsp";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      str += k;
    }
    str += "<br/>";
  }
  for (let i = 1; i <= numberOfLines - 1; i++) {
    for (let j = 1; j < i + 1; j++) {
      str += "&nbsp&nbsp";
    }
    for (let k = 1; k <= 2 * (numberOfLines - i) - 1; k++) {
      str += k;
    }
    str += "<br/>";
  }
  document.getElementById("myPara").innerHTML = str;
}
