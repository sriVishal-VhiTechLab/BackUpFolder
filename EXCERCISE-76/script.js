validateUserMail = () => {
    let mailInp = document.getElementById("usrMail");
    let isValidEmail = document.getElementById("validMail");
    let mailRegex = /^[a-zA-Z0-9]+@[a-zA-z]+\.[a-zA-Z]{2,4}$/;
    if (mailInp.value.match(mailRegex)) {
        isValidEmail.style.color = "green";
        isValidEmail.innerHTML = `Mail Is Valid`;
    }
    else {
        isValidEmail.style.color = "red";
        isValidEmail.innerHTML = `Enter A Valid Email!`
    }
}
mainFunction = () => {
    let usrName = document.getElementById("usrName").value;
    let usrAge = document.getElementById("usrAge").value;
    let usrIntrests = document.getElementById("usrInt").value;
    let usrId = document.getElementById("usrId").value;
    let usrDob = document.getElementById("usrDob").value;
    let usrMail = document.getElementById("usrMail").value;
    let usrGender = document.getElementById("usrGender").value;
    let displayObj = dispStudentData(usrName, usrAge, usrIntrests, usrId, usrDob, usrMail, usrGender);
    let result = deleteStudentData(usrName, usrAge, usrIntrests, usrId, usrDob, usrMail, usrGender);
}
dispStudentData = (name, age, intrests, id, dob, mail, gender) => {
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

