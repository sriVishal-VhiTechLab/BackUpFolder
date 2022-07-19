function mainFunction() {
  let usrArr = document.getElementById("usrInp").value;
  let splitOutArray = usrArr.split(" ");
  console.log(splitOutArray);

  let sumOfArray = evaluate(splitOutArray);
  let sumOfAllNum = 55;
  let diffInArr = sumOfAllNum - sumOfArray;
  document.getElementById("myPara").innerHTML =
    diffInArr + " is The Missing Number in The Array";
function evaluate(arr1) {
    sum = 0;
    let len = arr1.length;
    for (let i = 0; i < len; i++) {
      sum = sum + Number(arr1[i]);
    }
    return sum;
  }
}
