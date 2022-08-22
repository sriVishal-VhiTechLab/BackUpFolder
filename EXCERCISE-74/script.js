mainFunction = () => {
    let usrTxt = document.getElementById("defaultText").value;
    let splitText = usrTxt.split(" ");
    let usrIndex = Number(document.getElementById("position").value);
    let insertWord = document.getElementById("insertText").value;
    let result = arrFunction(splitText, usrIndex, insertWord)
}
arrFunction = (arr, index, word) => {
    if (index === 0) {
        arr.splice(index, 0, word);
        document.getElementById("outPara").innerHTML = `${arr}`;
    }
    else {
        arr.splice(index - 1, 0, word);
        document.getElementById("outPara").innerHTML = `${arr}`;
    }
}
// Changes Done!