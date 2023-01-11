// fn -1
extractUnique = (arr) => {
      let uniqueArray = [];
      // for (let i = 0; i < arr.length; i++) {
      //       if (!uniqueArray.includes(arr[i])) {
      //             uniqueArray.push(arr[i]);
      //       }
      // }
      // return uniqueArray;

}
// ! REDUCE 
// fn-2
extractUniq = (arr) => {
      console.log(new Set(arr));
}
uniqueChar = (arr) => {
      return [...arr].reduce(
            (acc, current) => {
                  return acc.includes(current) ? acc : acc + current;
            }, ""
      )
}
