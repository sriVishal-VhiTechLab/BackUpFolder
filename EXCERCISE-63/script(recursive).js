function mainFunction() {
  let usrInp = Number(document.getElementById("usrNum").value);
  let result = findFactorial(usrInp);
  console.log(result);
}
function findFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * findFactorial(n - 1);
  }
}
