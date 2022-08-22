function mainFunction() {
  let usrStr = document.getElementById("usrInp").value;
  let outPut = check(usrStr);
}
function check(str) {
  let firstLetter = str.charAt(0);
  if (isNaN(str) === false) {
    document.getElementById("dispResult").innerHTML = `Enter a Valid Word.`
  }
  else if (firstLetter === firstLetter.toLowerCase()) {
    document.getElementById("dispResult").innerHTML = `FirstLetter Is LowerCase.`;
  }
  else {
    document.getElementById("dispResult").innerHTML = `FirstLetter Is UpperCase.`;

  }

}
//*Changes Done.
