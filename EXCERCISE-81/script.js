mainFunction = () => {
    let usrInp = document.getElementById("usrInp").value;
    let regexCondition = /[a-zA-Z0-9\.\,_\-\*\`\~]+[@][a-zA-Z]+[\.][a-z]/g;
    if (usrInp.match(regexCondition)) {
        document.getElementById("myPara").innerHTML = `${usrInp} is Valid Mail Address.`;
    }
    else {
        document.getElementById("myPara").innerHTML = `${usrInp} is Not A Valid Mail.`;

    }
}
