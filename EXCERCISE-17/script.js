
function leapYr() {
      var year = document.getElementById("yearInp").value;
      if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
            document.getElementById("demo").innerHTML = "Yes, Given Year is an Leap Year";
      }
      else {
            document.getElementById("demo").innerHTML = "Not an Leap Year Though !";
      }
}
/*A year is a leap year if the following conditions are satisfied:

The year is a multiple of 400.
The year is a multiple of 4 and not a multiple of 100.*/
