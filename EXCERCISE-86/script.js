function mainFunction() {
    let stuData = {};
    let usrName = document.getElementById("usrName").value;
    let usrAge = document.getElementById("usrAge").value;
    let usrIntrests = document.getElementById("usrInt").value;
    let usrId = document.getElementById("usrId").value;
    let usrDob = document.getElementById("usrDob").value;
    let usrMail = document.getElementById("usrMail").value;
    let usrGender = document.getElementById("usrGen").value;
    stuData.name = usrName;
    stuData.age = usrAge;
    stuData.intrests = usrIntrests;
    stuData.id = usrId;
    stuData.dob = usrDob;
    stuData.mail = usrMail;
    stuData.gender = usrGender;
    let objProps = Object.entries(stuData);
    console.log(objProps);
}
// !code cleaning as to remove the repetition
// *Changes Done