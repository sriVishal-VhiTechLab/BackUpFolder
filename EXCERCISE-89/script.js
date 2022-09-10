mainFunction = () => {
let usrName = document.getElementById("usrName").value;
let result = getName(usrName, greet);
document.getElementById("myPara").innerHTML = `${result}`
}
greet = () => {
    return 'Hello'
}
getName = (usr, funct) => {
    let message = funct();
    return `${message} ${usr}`;
}
// !Error
//* pass by Value , // pass by reference.