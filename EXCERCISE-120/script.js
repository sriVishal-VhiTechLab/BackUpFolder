// Get User Data
let usrFullName = document.getElementById("usrFullName").value;
let usrDob = document.getElementById("usrDob").value;
let usrCountry = document.getElementById("usrCountry").value;
let usrOrg = document.getElementById("usrOrg").value;
let usrMobNum = document.getElementById("usrMobNum").value;
let usrState = document.getElementById("usrState").value;
let usrPinCode = document.getElementById("usrPinCode").value;
let usrMail = document.getElementById("usrMail").value;
let usrComAddress = document.getElementById("comAddress").value;
let usrPermAddress = document.getElementById("permanentAddress").value;
copyTxtAddress = () => {
      usrPermAddress.innerHTML = usrComAddress;
}
let isRequired = value => value === '' ? false : true;
let arrOfInp = [usrFullName, usrDob, usrCountry, usrOrg, usrMobNum, usrState, usrPinCode, usrMail, usrComAddress];
let cancelBtn = document.getElementById("regBtn").addEventListener('click', () => {
      arrOfInp.forEach(element => {
            if (isRequired(element) === true) {
            
            }
            else {
                  element.style.border = "2px solid red";
            }
      });
      // let indicators = document.querySelectorAll('span');
      // indicators.forEach(element => {
      //       if (isRequired(usrFullName) === true) {
      //             element.style.color = "red";
      //       }
      //       else {
      //             element.style.color = "color";
      //       }
      // });

})
// ---USER PIC UPLOAD-------
let getUserImg = document.getElementById("usrImgUpload");
uploadUserImage = () => {
      getUserImg.click();
}
getUserImg.addEventListener("change", function () {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
            const uploaded_image = reader.result;
            document.querySelector("#displayPic").style.backgroundImage = `url(${uploaded_image})`;
      });
      reader.readAsDataURL(this.files[0]);
});
// --------------------! UTILITY FUNCTIONS AND BASIC VALIDATIONS------------
checkUsrName = (name) => {
      nameRegex = /^[A-Za-z]{5,16}$/;
      if (nameRegex.test(name)) {
            document.getElementById("usrFullName").style.border = "2px solid green";
      }
      else {
            document.getElementById("usrFullName").style.border = "2px solid red";
      }
}
checkUsrEmail = (mailId) => {
      mailRegex = /^[a-zA-Z0-9]+@[a-zA-z]+\.[a-zA-Z]{2,4}$/;
      if (mailRegex.test(mailId)) {
            document.getElementById("usrMail").style.border = "2px solid green";
            return true;
      }
      else {
            document.getElementById("usrMail").style.border = "2px solid red";
            return false;
      }
}
checkMobNumber = (mobNum) => {
      rMobNumRegex = /^[6-9][0-9]{9,12}$/;
      if (rMobNumRegex.test(mobNum)) {
            document.getElementById("usrMobNum").style.border = "2px solid green";
            return true;
      }
      else {
            document.getElementById("usrMobNum").style.border = "2px solid red";
            return false;
      }
}
checkPinCode = (code) => {
      pinCodeRegex = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;
      if (isRequired(code) && pinCodeRegex.test(code)) {
            document.getElementById("usrPinCode").style.border = "2px solid green";
            return true;
      }
      else {
            document.getElementById("usrPinCode").style.border = "2px solid red";
            return false;
      }
}
