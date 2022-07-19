function mainFunction() {
    let usrName = document.getElementById("usrName").value;
    let usrAge = document.getElementById("usrAge").value;
    let usrIntrests = document.getElementById("usrInt").value;
    let usrId = document.getElementById("usrId").value;
    let usrDob = document.getElementById("usrDob").value;
    let usrMail = document.getElementById("usrMail").value;
    let usrGender = document.getElementById("usrGen").value;
    let dispData = evaluateStudentData(usrName, usrAge, usrIntrests, usrId, usrDob, usrMail, usrGender);
}
evaluateStudentData = (name, age, intrests, id, dob, mail, gender) =>/*Function*/ {
    let stuData = {};/*Obj*/
    stuData.name = name;
    stuData.age = age;
    stuData.intrests = intrests;
    stuData.id = id;
    stuData.dob = dob;
    stuData.mail = mail;
    stuData.gender = gender;
    document.getElementById("objHeader").innerHTML = `Object Representaion`;
    document.getElementById("myPara").innerHTML = `Name : ${stuData.name}<br> Age: ${stuData.age} <br> Intrests : ${stuData.intrests} <br> Id : ${stuData.id}<br> Date Of Birth: ${stuData.dob}<br> Mail : ${stuData.mail}<br> Gender : ${stuData.gender}`;
    document.getElementById("objHeader2").innerHTML = `Array Representation`;
    let studProperties = Object.keys(stuData);
    let stuValues = Object.values(stuData);
    let objArray = Object.entries(stuData);
    document.getElementById("myPara2").innerHTML = `Properties : [${studProperties}]<br>Values : [${stuValues}]`;
}