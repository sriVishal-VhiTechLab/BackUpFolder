function myFunction() {
      document.getElementById("demo").innerHTML = "Inspect This Page To see The Result";
  
      printingNum();
}
function printingNum(x) {
      for (let x = 0; x <= 15; x++) {
            if (x % 2 == 0) {

                  console.log(x + " is An Even Number");
            }

            else {
                  console.log(x + " is an Odd Number")
            }
      }
      return x
}