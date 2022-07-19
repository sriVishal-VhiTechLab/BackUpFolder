mainFunction = () => {
    let usrName = document.getElementById("usrName").value;
    let usrAge = document.getElementById("usrAge").value;
    let usrDob = document.getElementById("usrDob").value;
    let usrGender = document.getElementById("usrGender").value;
    let usrMail = document.getElementById("usrMail").value;
    let result = getObject(usrName, usrAge, usrDob, usrGender, usrMail);
    console.log(result);
}
getObject = (Name, age, dob, gender, mail) => {
    let student = {};
    student.NAME = Name;
    student.AGE = age;
    student.DOB = dob;
    student.GENDER = gender;
    student.MAIL = mail;
    let properties = Object.entries(student);
    for (let i = 0; i < properties.length; i++) {
        for (let j = 0; j < properties[i].length; j++) {
            document.write(`${properties[i][j]}`);
        }
        document.write("</br>");
    }
    return properties;
}