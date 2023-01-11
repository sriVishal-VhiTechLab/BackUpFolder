mainFunction = () => {
      let usrInp = document.getElementById("usrText").value;
      let result = validatePass(usrInp);
      console.log(result);
}
validatePass = (str) => {
      let regexExp = /[A-Za-z!@#$%^&*0-9]{6,26}/gm;
      if (str.match(regexExp)) {
            document.getElementById("myPara").innerHTML = `Your PassWord is Safe!`;
            document.getElementById("myPara").style.color = "green";


      }
      else {
            document.getElementById("myPara").innerHTML = `Not a Safe PassWord!`;
            document.getElementById("myPara").style.color = "red";

      }
}