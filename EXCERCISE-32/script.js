function greatestNum() {
      let x, y;
      x = Number(document.getElementById("num1").value);
      y = Number(document.getElementById("num2").value);
      if (x > y) {
            alert(x + " is Greater Than " + y);
      }
      if (x == y) {
            alert("Both Numbers Are Equal");
      }
      else {
            alert(`${y} is Greater Than ${x}`);
      }

}  

//


