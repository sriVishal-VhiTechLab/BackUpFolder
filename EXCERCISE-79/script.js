function mainFunction() {
  let usrStr = document.getElementById("usrInp").value;
  let outPut = check(usrStr);
  if (outPut == true) {
    document.getElementById(
      "myPara"
    ).innerHTML = `The Fisrt letter is UpperCase`;
  } else {
    document.getElementById(
      "myPara"
    ).innerHTML = `The Fisrt letter is lowerCase`;
  }
}
function check(str) {
  if (isNaN(str) == false) {
    return `${str}is Numeric`;
  } else {
    str.toString();
    let firstLetter = str.charAt(0);
    if (firstLetter == firstLetter.toUpperCase()) {
      return true;
    }
    if (firstLetter == firstLetter.toLowerCase()) {
      return false;
    }
  }
}
