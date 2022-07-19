function mainFunction(){ 
      let arrObj1 = Number(document.getElementById("num1").value);
      let arrObj2 = Number(document.getElementById("num2").value);
      function swapArr(x,y) {
            alert("Resultant Array is : ["+y+" , "+x+"]");
            return x,y;
      }
      swapArr(arrObj1,arrObj2);
      
}
