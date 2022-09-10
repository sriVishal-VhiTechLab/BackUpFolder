mainFunction = () => {
    let usrInp = document.getElementById("usrInp").value;
    let result = checkForChar(usrInp);
    console.log(result);
    if (result === true) {
        document.getElementById("showResult").innerHTML = `Your Input is Char Datatype`;
    }
    else {
        document.getElementById("showResult").innerHTML = `Your Input is Not Char Datatype`;
    }
}
let charRegex = /^[a-zA-Z]$/;
checkForChar = (inp) => {
    const validateString = inp.split('').find(Element => {
        return !charRegex.test(Element);

    })
    console.log(validateString);
    // let conversion = validateString.toString();
    // return conversion;
}