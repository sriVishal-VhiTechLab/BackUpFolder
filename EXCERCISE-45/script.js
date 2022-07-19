// function mainFunction() {
//       let inpArr = document.getElementById("inpLetter").value;
//       let inpChar = document.getElementById("findLetter").value;
//       let resArr = usrArr(inpArr);
//       let outArr = findArr(resArr);
//       console.log(resArr);
//       function usrArr(arr) {
//             let temp = [];
//             for (i of arr) {
//                   temp.push(i)
//             }
//             return arr;
//       }
//       function findArr(char) {
//             char.find(inpChar);
//             return char


//       }
// }
function mainFunction() {
      let inpArr = document.getElementById("inpLetter").value;
      let inpChar = document.getElementById("findLetter").value;
      let position = inpArr.search(inpChar);
      alert("Your Word is : " + inpArr);
      if (position == -1) {
            alert("The letter Cant Be found!")
      }
      else {
            alert("The Entered Letter Is found at index " + position);
      }

}