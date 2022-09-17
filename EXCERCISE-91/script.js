mainFunction = () => {
    let student = {};
    student.Name = document.getElementById("usrName").value;
    student.Age = document.getElementById("usrAge").value;
    student.Dob = document.getElementById("usrDob").value;
    student.Gender = document.getElementById("usrGender").value;
    student.Mail = document.getElementById("usrMail").value;
    console.log(student);
    let properties = Object.entries(student);
    console.log(properties);
}
// *Changes Done!