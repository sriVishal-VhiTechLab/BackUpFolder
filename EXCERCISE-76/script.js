function mainFunction() {
    let usrName = document.getElementById("usrName").value;
    let usrAge = document.getElementById("usrAge").value;
    let usrIntrests = document.getElementById("usrInt").value;
    let usrId = document.getElementById("usrId").value;
    let usrDob = document.getElementById("usrDob").value;
    let usrMail = document.getElementById("usrMail").value;
    let usrGender = document.getElementById("usrGen").value;
    let removeField = document.getElementById("usrRemove").value.toLowerCase();
    let dispData = evaluateStudentData(usrName, usrAge, usrIntrests, usrId, usrDob, usrMail, usrGender, removeField);
    document.getElementById("objHeader").innerHTML = `Data Before Deletion`;
}
evaluateStudentData = (name, age, intrests, id, dob, mail, gender, removeField) =>/*Function*/ {
    let stuData = {};/*Obj*/
    stuData.name = name;
    stuData.age = age;
    stuData.intrests = intrests;
    stuData.id = id;
    stuData.dob = dob;
    stuData.mail = mail;
    stuData.gender = gender; debugger;
    document.getElementById("objHeader").innerHTML = `Data Before Deletion`;
    document.getElementById("myPara").innerHTML = `Name : ${stuData.name}<br> Age: ${stuData.age} <br> Intrests : ${stuData.intrests} <br> Id : ${stuData.id}<br> Date Of Birth: ${stuData.dob}<br> Mail : ${stuData.mail}<br> Gender : ${stuData.gender}`;
    delete stuData[removeField];
    let entities = Object.values(stuData);
    console.log(entities);
    entities.splice(removeField, 1);
    console.log(entities);
    document.getElementById("objHeader2").innerHTML = `Data After Deletion`;
    document.getElementById("myPara2").innerHTML = `Name : ${stuData.name}<br> Age: ${stuData.age} <br> Intrests : ${stuData.intrests} <br> Id : ${stuData.id}<br> Date Of Birth: ${stuData.dob}<br> Mail : ${stuData.mail}<br> Gender : ${stuData.gender}`;
}


