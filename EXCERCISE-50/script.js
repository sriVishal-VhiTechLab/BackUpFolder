function mainFunction() {
      let usrInpMail = document.getElementById("usrInp").value;
      let outMail = maskedMailCreation(usrInpMail);
      document.getElementById("myPara").innerHTML= outMail;
  
}
function maskedMailCreation(email) {
      let hiddenMail = "";
      for (i = 0; i < email.length; i++) {
            if (i > 1 && i < email.indexOf("@")) {
                  hiddenMail += "*";
            }
            else {
                  hiddenMail += email[i];
            }
      }
      return hiddenMail;
}