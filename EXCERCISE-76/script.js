function mainFunction() {
    let usrName = document.getElementById("usrName").value;
    let usrAge = document.getElementById("usrAge").value;          //REGEX PENDING.
    let usrIntrests = document.getElementById("usrInt").value;
    let usrId = document.getElementById("usrId").value;
    let usrDob = document.getElementById("usrDob").value;
    let usrMail = document.getElementById("usrMail").value;
    let usrGender = document.getElementById("usrGender").value;
    let displayObj = dispStudentData(usrName, usrAge, usrIntrests, usrId, usrDob, usrMail, usrGender);
    document.getElementById("dispModObjDiv").style.display = 'block';
    let result = deleteStudentData(usrName, usrAge, usrIntrests, usrId, usrDob, usrMail, usrGender);
}
dispStudentData = (name, age, intrests, id, dob, mail, gender) =>/*Function*/ {
    let stuData = {};
    stuData.name = name;
    stuData.age = age;
    stuData.intrests = intrests;
    stuData.id = id;
    stuData.dob = dob;
    stuData.mail = mail;
    stuData.gender = gender;
    document.getElementById("header").innerHTML = `Data Before Deletion`;
    document.getElementById("dispObj").innerHTML = `Name : ${stuData.name}<br> Age: ${stuData.age} <br> Intrests : ${stuData.intrests} <br> Id : ${stuData.id}<br> Date Of Birth: ${stuData.dob}<br> Mail : ${stuData.mail}<br> Gender : ${stuData.gender}`;
}
deleteStudentData = (Name, age, intrests, id, dob, mail, gender) => {
    let stuObj = {};
    stuObj.name = Name;
    stuObj.age = age;
    stuObj.intrests = intrests;
    stuObj.id = id;
    stuObj.dob = dob;
    stuObj.mail = mail;
    stuObj.gender = gender;
    document.getElementById("delBtn").addEventListener('click', () => {
        let removeAttribute = document.getElementById("usrRemove").value.toLowerCase();
        delete stuObj[removeAttribute];
        document.getElementById("modHeader").innerHTML = `Data After Deletion`;
        document.getElementById("modObjDisp").innerHTML = `Name : ${stuObj.name}<br> Age: ${stuObj.age} <br> Intrests : ${stuObj.intrests} <br> Id : ${stuObj.id}<br> Date Of Birth: ${stuObj.dob}<br> Mail : ${stuObj.mail}<br> Gender : ${stuObj.gender}`;

    })
}

