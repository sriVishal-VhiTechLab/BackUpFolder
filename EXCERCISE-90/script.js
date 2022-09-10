mainFunction = () => {
    let usrName = document.getElementById("usrName").value;
    let usrAge = document.getElementById("usrAge").value;
    let usrDob = document.getElementById("usrDob").value;
    let usrGender = document.getElementById("usrGender").value;
    let usrMail = document.getElementById("usrMail").value;
    let result = getData(usrName, usrAge, usrDob, usrGender, usrMail);
    console.log(result);
}
getData = (name, age, dob, gender, mail) => {
    let student = {};
    student.name = name;
    student.age = age;
    student.dob = dob;
    student.gender = gender;
    student.mail = mail;
    document.getElementById("myHeader").innerHTML = `Object Properties`;
    // document.getElementById("myPara").Get = `Name : ${student.name}<br> Age: ${student.age} <br> DOB : ${student.dob} <br> GENDER : ${student.id}<br> Date Of Birth: ${student.dob}<br> Mail : ${student.mail}<br> Gender : ${stuData.gender}`;
    let properties = Object.keys(student);
    let arr = [];
    arr.push(properties);
    document.getElementById("myPara").innerHTML = `${arr}`;
    return arr;
}

