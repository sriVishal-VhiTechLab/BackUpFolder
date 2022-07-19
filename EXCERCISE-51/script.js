function mainFunction() {
  let n = Number(document.getElementById("usrInp").value);
  let result = check(n);
  if (result == true) {
    document.getElementById(
      "myPara"
    ).innerHTML = `The Given Number is Power Of 2`;
  } else {
    document.getElementById(
      "myPara"
    ).innerHTML = `The Given Number is Not a Power Of 2`;
  }
}
function check(num) {
  if (num === 1) {
    return true;
  }
  if (num % 2 !== 0) {
    return false;
  }
  return check(num / 2);
}
