let array1 = ["param1", "param2", "param3", "param4"];
document.write("<h2>REVERSING THE ORDER OF ARRAY</h2>")
document.write("THE GIVEN ARRAY  IS: ["  +  array1+"]");
function revArray() {
      var y = array1.reverse();
      document.getElementById("demo").innerHTML = "THE REVERSE ORDER : "+"["+ y+"]";
}