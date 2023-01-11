const mergeSortArray = (arr) => {
      if (arr.length < 2) {
            return arr // * base Cond.
      }
      const midEle = Math.floor(arr.length / 2);
      const leftArray = arr.slice(0, midEle);
      const rightArray = arr.slice(midEle);
      return merge(mergeSortArray(leftArray), mergeSortArray(rightArray));
}
const merge = (leftArray, rightArray) => {
      const sortArray = [];
      while (leftArray.length && rightArray.length) {
            if (leftArray[0] <= rightArray[0]) {
                  sortArray.push(leftArray.shift());
            } else {
                  sortArray.push(rightArray.shift())
                  // * Shift Method is used to remove the element from the rightArray 
                  // * After Pushing the same Into sortArray.  
            }
      }
      return [...sortArray, ...leftArray, ...rightArray];
}
console.log(mergeSortArray([12, 34, 11, 8, 6, 10, 23, 46]));