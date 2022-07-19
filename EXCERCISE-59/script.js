// function mainFunction() {
//       let usrNum = Number(document.getElementById("usrInp").value);
//       let a = reverse(usrNum);
//       if (a == usrNum) {
//             document.getElementById("myPara").innerHTML = a+" is a Palindromic Number";
//       }
//       else {
//             document.getElementById("myPara").innerHTML = `${a} is not a Palindromic Number`;

//       }
// }
// function reverse(num) {
//       let reverseNum = 0;
//       let lastDigit;
//       while (num != 0) {
//             lastDigit = num % 10;
//             reverseNum = reverseNum * 10 + lastDigit;
//             num = Math.floor(num / 10); // This line is to stop the While loop when the num Becomes 0. 
//       }
//       return reverseNum;
// }
function mainFunction() {
      let usrNum = document.getElementById("usrInp").value;
      let outPut = usrNum.split('').reverse().join('');
      if (usrNum === outPut) {
            document.getElementById("myPara").innerHTML = `${usrNum} is An Palidrome Number`
      }
      else{
            document.getElementById("myPara").innerHTML = `${usrNum} is Not An Palidrome Number`

      }
}