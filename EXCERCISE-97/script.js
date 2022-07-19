mainFunction = () => {
    let usrInp = document.getElementById("usrInp").value;
    let result = checkForChar(usrInp);
    console.log(result);
    if (result === true) {
        document.getElementById("myPara").innerHTML = `Your Input is Char Datatype`;
    }
    else {
        document.getElementById("myPara").innerHTML = `Your Input is Not Char Datatype`;
    }
}
checkForChar = (inp) => {
    return (/[a-zA-Z]/).test(inp);
}