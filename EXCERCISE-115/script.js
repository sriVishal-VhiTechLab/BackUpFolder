mainFunction = () => {
      let usrStr = document.getElementById("usrStr").value;
      let splitStr = usrStr.split(',');
      let result = removeDup(splitStr);
      console.log(result);
}
// removeDup = (arr) => {
//       debugger;
//       let outArray = [];
//       let txt = '';
//       for (let i = 0; i < arr.length; i++) {
//             let getStr = arr[i].toString();
//             let getChar = getStr.charAt(getStr.length - 1);
//             if (arr[i + 1].includes(getChar) == true) {
//                   let regex = new RegExp(getChar, 'g');
//                   txt = arr[i + 1].replace(regex, '');
//                   // console.log(txt);
//                   outArray.push(txt);
//                   outArray.unshift(arr[0]);
//                   console.log(outArray);
//             }
//             else {
//                   return arr;
//             }
//       }
// }
removeDup = (arr) => {
      let outArray = [];
      let uniqTxt = '';
      outArray.push(arr[0]);
      for (let i = 0; i < arr.length; i++) {
            let str1 = arr[i].toString();
            let lastLetter = str1.charAt(str1.length - 1);
            let str2 = arr[i + 1].toString();
            if (str2.includes(lastLetter) === true) {
                  let regex = new RegExp(lastLetter, 'g');
                  uniqTxt = str2.replace(regex, '');
                  outArray.push(uniqTxt);
                  // console.log(outArray);
                  let joinArray = outArray.join('');
                  let resultArr = [];
                  resultArr.push(joinArray);
                  console.log(resultArr);
                  document.getElementById("myPara").innerHTML = resultArr;
            }
            else {
                  return arr;
            }
      }

}





