function mainFunction() {
      let x1 = Number(document.getElementById("num1").value);
      let x2 = Number(document.getElementById("num2").value);
      let x3 = Number(document.getElementById("num3").value);
      let arr = [];
      arr.push(x1);
      arr.push(x2);
      arr.push(x3);
      document.getElementById("demo").innerHTML = "Your Array Is : [" + arr + "]";
      function largeNum(x, y, z) {
            if (x >= y && x >= z) {
                  alert(x + " Is greatest Among Three");
            }
            if (y >= x && y >= z) {
                  alert(y + " Is greatest Among Three");
            }
            if (z >= x && z >= y) {
                  alert(z + " Is greatest Among Three");
            }
            if(x == y && x==z) {
                  alert("All the Three Numbers Are Equal");
            }
            return x, y, z;

      }
      largeNum(x1, x2, x3);


}