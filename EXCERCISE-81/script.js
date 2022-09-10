mainFunction = () => {
    let usrInp = document.getElementById("usrInp").value;
    let regexCondition = /^[a-zA-Z0-9\.\,_\-\*\`\~]+[@][a-zA-Z]+[\.][a-z]$/;
    if (usrInp.match(regexCondition)) {
        document.getElementById("dispPara").innerHTML = `${usrInp} is Valid Mail Address.`;
    }
    else {
        document.getElementById("dispPara").innerHTML = `${usrInp} is Not A Valid Mail.`;

    }
}
