const mainFunction = () => {
      const name1 = document.getElementById('inp1').value;
      const name2 = document.getElementById('inp2').value;
      const kingArray = name1.split('');
      const queenArray = name2.split('');
      let flameNumber = 0;
      getUniqValue = (arr1, arr2) => {
            for (let index = 0; index < arr1.length; index++) {
                  let commonCharIndex = arr2.indexOf(arr1[index]);
                  if (commonCharIndex >= 0) {
                        arr2[commonCharIndex] = 0;
                        arr1[index] = 0
                  }
            }
            let combinedCommonCharArray = arr1.concat(arr2);
            const finalResultArray = [];
            for (let index = 0; index < combinedCommonCharArray.length; index++) {
                  if (combinedCommonCharArray[index] != 0) {
                        finalResultArray.push(combinedCommonCharArray[index]);
                  }
            }
            return finalResultArray.length;
      }
      matchPartners = (value) => {
            let resultNumber = value % 6;
            const flamesObj = {
                  0: "You are Friends",
                  1: "You are Lovers",
                  2: "Affectionate",
                  3: "You Will get Married",
                  4: "Enemies",
                  5: "Siblings",
            };
            console.log(flamesObj[resultNumber]);
      }
      if (kingArray.length > queenArray.length) {
            flameNumber = getUniqValue(kingArray, queenArray);
      } else {
            flameNumber = getUniqValue(queenArray, kingArray)
      }
      matchPartners(flameNumber);
}