let a = document.getElementById("dInput").value;
if (a > 31) {
      alert("ENTER A VALID DATE");
}
function getMonth() {
      let a = document.getElementById("dInput").value;
      if (a > 31) {
            alert("ENTER A VALID DATE");
      }
      let b= document.getElementById("yInput").value;
      if ((b < 1900) || (b > 3000)) {
            alert("ENTER A VALID YEAR");
      }
      let monthNames = ["ENTER A VALID MONTH NUMBER", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let x = document.getElementById("mInput").value;
      // let mArray = monthNames.valueOf(x);
      // console.log(mArray)
      document.getElementById("demo").innerHTML = mArray[x];
      if (x > 12) {
            alert("ENTER A VAILD MONTH NUMBER");
      }
      

}