// function mainFunction() {
//     let usrInp = document.getElementById("usrInp").value;
//     let result = validateObject(usrInp);
//     console.log(result);
// }
function validateObject(text) {
    let datatype = typeof(text);
    return datatype === 'object';
}
// ! Check For Array 
// ? alernative for typeOf()