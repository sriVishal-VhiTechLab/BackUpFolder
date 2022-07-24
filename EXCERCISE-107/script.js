mainFunction = () => {
      let usrInp = document.getElementById("usrText").value;
      let result = validatePass(usrInp);
      console.log(result);
}
validatePass = (str) => {
      let regexExp = /^((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,26})+$/;
      if (str.match(regexExp)) {
            document.getElementById("myPara").innerHTML = `Your PassWord is Safe!`;
      }
      else {
            document.getElementById("myPara").innerHTML = `Not a Safe PassWord!`
      }
}