function mainFunction() {
    let usrInp = document.getElementById("usrInp").value;
    let result = validateObject(usrInp);
    console.log(result);
}
function validateObject(str) {
    try {
        JSON.parse(str);
        document.getElementById("myPara").innerHTML = str;
        document.getElementById("myPara2").innerHTML = `You Input is A Valid Object`
    }
    catch (err) {
        document.getElementById("myPara2").innerHTML = `Your Object is Not Valid!`
    }
    return str;

}