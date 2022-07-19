// function mainFunction() {
//       for (let i = 1; i <= 1000; i++) {
//             function reverse(num) {
//                   let lastDigit;
//                   let reverseNum = 0;
//                   while (num != 0) {
//                         console.log(num);
//                         lastDigit = num % 10;
//                         reverseNum = reverseNum * 10 + lastDigit;
//                         num = Math.floor(num / 10);
//                         // rounds the Assigned Number to the nearest Number, if 
//                         // number is 0 then  while loop is terminated....... 
//                   }
//                   return reverseNum;
//             }
//             let a = reverse(i);
//             if (a == i) {
//                   console.log(i);
//             }

//       }
// }
function mainFunction() {
      for (i = 0; i <= 1000; i++) {
            let temp = i;
            let reverseNum = temp.toString().split('').reverse().join('');
            // console.log(reverseNum,i);
            if (reverseNum === i) {
                  document.write(i + '<br>');
            }
      }
}
