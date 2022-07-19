function mainFunction() {
      let usrInpArr = document.getElementById("usrInp").value;
      let splitOutArray = usrInpArr.split(" ");
      console.log(splitOutArray);
      let outArray = sumOfSqr(splitOutArray);
      document.getElementById("myPara").innerHTML = "The Sum Of all Numbers Of this Array is : "+outArray;
}
function sumOfSqr(arr1) {
      let sum = 0;
      let i = arr1.length;
      while (i--) {
            sum += Math.pow(Number(arr1[i]), 2);
      } 
      return sum;

}