// // GET INPUT FROM USER BY PROMPT METHOD
// const num1 = parseInt(prompt('ENTER THE FIRST NUMBER'));
// const num2 = parseInt(prompt('ENTER THE SECOND NUMBER'));
// // ADDING THE TWO NUMBERS GIVEN BY THE USER
// const sum = num1 + num2;
// // PRINTING THE OUTPUT
// document.write(`THE SUM OF TWO NUMBERS : ${sum}`+ "<br>");
// confirm("THE ANSWER IS : "+sum);
function addNum() {
      let x = document.getElementById("num1").value;
      let y = document.getElementById("num2").value;
      let z=  Number(x) + Number(y);//here we add "Number" to convert the string values got in input field to  integers...
      document.getElementById("demo").innerHTML="SUM OF TWO NUMBERS : "+z;
}