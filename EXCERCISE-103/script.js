const binarySearch = (arr, tar) => {
      let startIndex = 0;
      let endIndex = arr.length - 1;
      while (startIndex <= endIndex) {
            let midIndex = Math.floor((startIndex + endIndex) / 2);
            if (tar == arr[midIndex]) {
                  return tar + " is Found at index " + midIndex;
            }
            if (tar < arr[midIndex]) {
                  endIndex = midIndex - 1;
            } else {
                  startIndex = midIndex + 1;
            }
      }
      return false;
}




