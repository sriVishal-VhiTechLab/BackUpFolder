mainFunction = () => {
    let usrInp = document.getElementById("usrInp").value;
    let result = validateRegex(usrInp);
}
validateRegex =(str)=>{
    if (str.startsWith("/^")&& str.endsWith("$/")){
        document.getElementById("myPara").innerHTML = `The Given Input Is an Regex Expression`;
    }
    else{
        document.getElementById("myPara").innerHTML = `The Given Input Is Not an Regex Expression`;
        
    }
}

//wrong change it