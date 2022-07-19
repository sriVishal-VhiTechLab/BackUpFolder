function myFunction() {
  let usrInp = document.getElementById("usrArr").value;
  let splitArray = usrInp.split(" ");
  let outArray = sortArray(splitArray);
  document.getElementById("outPara").innerHTML = outArray;
}
function sortArray(arr) {
  let len = arr.length;
  for (i = 0; i < len; i++) {
    for (j = 0; j < len - 1; j++) {
      if (Number(arr[j]) > Number(arr[j + 1])) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
