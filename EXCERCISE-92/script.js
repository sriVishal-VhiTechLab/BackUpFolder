const stuData = {};
stuData.name = document.getElementById("usrName").value;
stuData.age = document.getElementById("usrAge").value;
stuData.dob = document.getElementById("usrDob").value;
stuData.gender = document.getElementById("usrGender").value;
stuData.mail = document.getElementById("usrMail").value;
mainFunction = () => {
    let usrInp = document.getElementById("usrInp").value;
    usrInp = usrInp.toLowerCase();
    console.log(usrInp);
    let result = stuData.hasOwnProperty(usrInp);
    console.log(result);
}
// *Changes Done