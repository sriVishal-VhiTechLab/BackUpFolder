mainFunction = () => {
      let usrArr = document.getElementById("usrArr").value;
      let arrOfNum = usrArr.split(" ").map(Number);
      let result = mergeSort(arrOfNum);
      console.log(result);
}
mergeSort = (array) => {
      debugger;
      if (array.length === 1) {
            return array;// Base Condition.
      }
      let midIndex = Math.floor(array.length / 2);
      let leftPart = array.slice(0, midIndex);
      let rightPart = array.slice(midIndex); // Returns the array of elements After MidIndex.
      return mergeArray(mergeSort(leftPart), mergeSort(rightPart));
}
mergeArray = (left, right) => {

      let outArray = [];// Final Output Array.
      let leftArrayIndex = 0, rightArrayIndex = 0;
      while (leftArrayIndex < left.length && rightArrayIndex < right.length) {
            if (left[leftArrayIndex] < right[rightArrayIndex]) {
                  outArray.push(left[leftArrayIndex]);
                  leftArrayIndex++;
            }
            else {
                  outArray.push(right[rightArrayIndex]);
                  rightArrayIndex++;
            }
      }
      return outArray.concat(left.slice(leftArrayIndex)).concat(right.slice(rightArrayIndex));
}
