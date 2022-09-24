// mainFunction = () => {
//     let usrName = document.getElementById("usrName").value;
//     let usrAge = document.getElementById("usrAge").value;
//     let usrDob = document.getElementById("usrDob").value;
//     let usrGender = document.getElementById("usrGender").value;
//     let usrMail = document.getElementById("usrMail").value;
//     let result = getObject(usrName, usrAge, usrDob, usrGender, usrMail);
//     console.log(result);
// }
// getObject = (Name, age, dob, gender, mail) => {
//     let student = {};
//     student.NAME = Name;
//     student.AGE = age;
//     student.DOB = dob;
//     student.GENDER = gender;
//     student.MAIL = mail;
//     document.write("<h2>Object Representation</h2>");
//     document.write("NAME :" + student.NAME + "<br>" + "AGE :" + student.AGE + "<br>" + "DOB :" + student.DOB + "<br>" + "GENDER :" + student.GENDER + "<br>" + "MAIL :" + student.MAIL + "<br>");
//     document.write("<h2>Key And Value Pairs Of this Above Objects</h2><br>");
//     let properties = Object.entries(student);
//     for (let i = 0; i < properties.length; i++) {
//         let temp = '';
//         temp = `${properties[i][0]}&nbsp&nbsp${properties[i][1]}<br>`
//         document.write(`${temp}`);
//     }
//     document.write("<h2>Reverse Order</h2><br>");
//     for (let i = 0; i < properties.length; i++) {
//         let temp2 = '';
//         temp2 = `${properties[i][1]}&nbsp&nbsp${properties[i][0]}<br>`;
//         document.write(`${temp2}`);
//     }
//     return properties;

// }
// // !Wrong
// // ? dono Hw to Proceed.


const a={
    name:"avinash",
    mark:22,
   
 city:"chennai"
}
for(let i in a){
    console.log(i);
}