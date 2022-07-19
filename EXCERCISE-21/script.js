//  CASES FOR THIS EXCERCISE 
//  FIRST WE SHOULD CHECK GIVEN NUMBER IS MULTIPLE OF BOTH 3 AND 7 OR ELSE WE SHOULD RETURN THAT THIS GIVEN NUMBER IS NOT A MULTIPLE OF BOTH.
//  SECOND THE NUMBER MAY BE MULTIPLE OF 3 (Return multiple of 3 or not a multiple of 3)
//  SAME FOR MULTIPLE OF 7 NUMBER
function calcMultiple() {
      let num= document.getElementById("numInp").value;
      if ((num % 3 == 0) || (num % 7 == 0)) {
      document.getElementById("demo").innerHTML= `${num}is Multiple of Both 3 and 7`
        if((num % 3 ==0) && (num %7 != 0)){
              document.getElementById("demo").innerHTML= `${num} is an Multiple of 3 and not an Multiple of 7`;
        }
        if((num % 3 !=0)&& (num % 7 == 0)) {
              document.getElementById("demo").innerHTML = `${num} is an Multiple of 7 and not an Multiple of 3`;
        }


      
      } 
      else {
      alert("ENTER A VALID INTEGEAR")
      }
}