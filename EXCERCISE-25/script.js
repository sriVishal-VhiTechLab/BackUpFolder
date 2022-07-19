function mainFunction() {
      let usrInput = document.getElementById("usrInp").value;
      let result = checkDatatype(usrInput);
      

      function checkDatatype(usrEntry) {
            if (usrEntry.length == 0) {
                        alert("Please Enter Some Text");
            }else{
                  if (usrEntry.startsWith("'") && usrEntry.endsWith("'")) { //The startsWith() method returns true if a string starts with a specified string.
                        alert(usrEntry + " is an Sting Datatype");
                  }
                  else if (usrEntry.startsWith("[") && usrEntry.endsWith("]")) {
                        alert(usrEntry + " is an Array Datatype")
                  }
                  else if (usrEntry.startsWith("{") && usrEntry.endsWith("}")) {
                        alert(`${usrEntry} is an Object`)
                  }
                  else if (!isNaN(usrEntry)) { //isNaN() – Stands for “is Not a Number”, if variable is not a number, it return true, else return false.
                        alert("You have Entered A Number");
                  }
            }

            // console.log(usrEntry.d);
      //       if (usrEntry.startsWith("'") && usrEntry.endsWith("'")) { //The startsWith() method returns true if a string starts with a specified string.
      //             alert(usrEntry + " is an Sting Datatype");
      //       }
      //       else if (usrEntry.startsWith("[") && usrEntry.endsWith("]")) {
      //             alert(usrEntry + " is an Array Datatype")
      //       }
      //       else if (usrEntry.startsWith("{") && usrEntry.endsWith("}")) {
      //             alert(`${usrEntry} is an Object`)
      //       }
      //       else if (usrEntry.indexOf(' ')) {
      //             alert("Please Enter Some Text");
      //       }
      //        else if (!isNaN(usrEntry)) { //isNaN() – Stands for “is Not a Number”, if variable is not a number, it return true, else return false.
      //            alert("You have Entered A Number");
      //      }
            return usrEntry;
      }
}