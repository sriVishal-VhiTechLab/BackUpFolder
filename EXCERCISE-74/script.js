mainFunction = () => {
    let usrTxt = document.getElementById("defaultText").value;
    let splitText = usrTxt.split(" ");
    let usrIndex = Number(document.getElementById("position").value);
    usrIndex = usrIndex - 1;
    console.log(usrIndex);
    let insertWord = document.getElementById("insertText").value;
    let result = arrFunction(splitText, usrIndex, insertWord)
}
arrFunction = (arr, index, word) => {
    arr.splice(index, 0, word);
    document.getElementById("myPara1").innerHTML = arr;
    console.log(joinText);
}