function mainFunction() {
      let usrInpStr = document.getElementById("usrStr").value;
      let result = firstVowel(usrInpStr);
      console.log(result);
      function firstVowel(str) {
            let char = "";

            for (let i = 0; i < str.length; i++) {
                  char = str.charAt(i);
                  if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u')
                        // alert("The First Vowel Of This String Is at index "+(i+1))

                        // Here Break Is used to Avoid Repeation of If Cond.
                        // (We only Find the First Vowel Only)
                        /* || is Logical or Operator*/





                        if (i < str.length) {
                              alert("The First Vowel Of This String Is at index " + (i + 1))

                        }
                        
                        else {
                              alert("There Is No Vowel In This String");
                        }
                  
            }
            return str;


      }
}

