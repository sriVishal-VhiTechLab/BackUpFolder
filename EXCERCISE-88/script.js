mainFunction = () => {
    let usrStr = document.getElementById("usrStr").value;
    let result = extractUniqueStr(usrStr);
    document.getElementById("myPara").innerHTML = `The Unique Letters In Your String : ${result}`
}
extractUniqueStr = (str) => {
    let uniqLetters = "";
    // for (let i = 0; i < str.length; i++) {
    //     if (uniqLetters.includes(str[i]) === false) {
    //         uniqLetters += str[i];
    //     }
    // }
    str.split("").forEach(element => {
        if (uniqLetters.includes(element) === false) {
            uniqLetters += element;
        }
    });
    return uniqLetters;
}
// !try to implement without for loop
// *Changes Done!