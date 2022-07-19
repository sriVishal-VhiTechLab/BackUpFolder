function myFunction() {

      let userInput = document.getElementById("arrSize").value;

      let convertedArr = stringToarr(userInput);
      let result = reversedArray(convertedArr);

      console.log(result)

}



function stringToarr(val){
      let temp = []; 
      for (let i of val) {
            temp.push(i);
      }
      return temp;
}


function reversedArray(arr){
      newarr = []
      for(let i= arr.length-1; i>=0; i--) {
            newarr.push(arr[i]);
      }
      return newarr
      
}