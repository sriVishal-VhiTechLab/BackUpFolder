function mainFunction() {
  let numberOfLines = Number(document.getElementById("usrInp").value);
  if (numberOfLines % 2 === 0) {
    alert("Enter a Valid Odd Number");
  } else {
    let str = "";
    for (let i = 0; i <= numberOfLines; i += 2) {
      for (let j = 0; j <= i; j++) {
        str += "*";
      }
      str += "<br/>";
    }

    for (let i = numberOfLines; i > 1; i -= 2) {
      for (let j = i - 1; j > 1; j--) {
        str += "*";
      }
      str += "<br/>";
    }
    document.getElementById("myPara").innerHTML=str;
  }
}
