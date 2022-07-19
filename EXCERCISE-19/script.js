// // CREATING ARRAY TO GET USER INPUT
// var inputArray = [];
// var size = 3; //Maximum Array size
// // ITERATING THE INPUT IN FOR LOOP
// for(var i=0; i<size; i++) {
// //Taking Input from user
// inputArray[i] = prompt('ENTER NUMBER ' + (i+1));
// }
// // refer Built in functions, array methods, Looping....
// //PRINTING THE ARRAY
// document.write("YOUR ARRAY IS : "+ inputArray+"<br>");
// document.write(Math.max(...inputArray));// ... IS REST OPERATOR OR SPREAD OPERATOR
// // [1,2,3]
// // 1,2,3



// function mainFunction() {
//       let x = document.getElementById("num1").value; 
//       let y = document.getElementById("num2").value;
//       let z = document.getElementById("num3").value;
//       let sum= convertToNum(x, y, z);



// function convertToNum(x, y, z) {

// return parseInt(x, y, z);

// }
// function greaterNum() {

// }
// }
function mainFunction() {
      let num1, num2, num3;
      num1 = Number(document.getElementById("num1").value);
      num2 = Number(document.getElementById("num2").value);//The Number() method converts a value to a number. 
      num3 = Number(document.getElementById("num3").value);//If the value cannot be converted, NaN is returned.
      if (num1 > num2 && num1 > num3) {
            alert(`${num1} is Greatest among the Three`)
      }
      else if (num2 > num1 && num2 > num3) {
            alert(num2 + " is Greatest among the Three")
      }
      else if (num3 > num1 && num3 > num1) {
            alert(num3 + " is Greatest among the Three")
      }
}