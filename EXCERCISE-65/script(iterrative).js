// ---------------------------------------------EXISTING----------------------------------
// function mainFunction() {
//   let n = Number(document.getElementById("usrInp").value);
//   let n1 = 0,
//     n2 = 1,
//     nextNum;
//   debugger;
//   document.write(n1);
//   document.write(n2);
//   for (let i = 0; i <= n; i++) {
//     nextNum = n1 + n2; //0+1//1+1//
//     n1 = n2; //n2 =1//n2=1//
//     n2 = nextNum; //nextNum 1//nextNum 2//
//     console.log(nextNum);
//     document.write(nextNum);
//   }
// }
// ---------------------------------------------2----------------------------------------
mainFunction = () => {
  let n = Number(document.getElementById("usrInp").value);
  let arr = [];
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  document.getElementById("myPara").innerHTML = arr;
}
