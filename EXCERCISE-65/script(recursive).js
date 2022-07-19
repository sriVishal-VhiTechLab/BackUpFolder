function mainFunction() {
  let nTerms = Number(document.getElementById("usrNumTerms").value);
  let result = fibanacci(nTerms);
  document.getElementById("myPara").innerHTML = `${result}`;
}
function fibanacci(term) {
  if (term === 1) {
    return [0, 1];
  }
  else {
    let fibArray = fibanacci(term - 1);
    fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
    return fibArray;
  }

}
