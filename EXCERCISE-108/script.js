const arr = [5, 5, 5, 1, 6, 1, 1, 3, 1, 3, 6];
const tempArr = [];
let temp = 0;
arr.forEach((item, index) => {
      if (!index) {
            tempArr.push(item);
      } else {
            tempArr.push(temp === 1 ? 0 : temp === 6 ? item * 2 : item);
      }
      temp = item;
});

console.log(tempArr.reduce((a, b) => a + b));
console.log(tempArr);