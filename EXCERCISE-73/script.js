function mainFunction() {
    let usrNum = Number(document.getElementById('usrInp').value);
    if (isNaN(usrNum) === true) {
        alert(`Enter a Valid Integer`);
    }
    let outPut = humanize(usrNum);
    document.getElementById("myPara").innerHTML = `${outPut}`;
}
function humanize(num) {
    let i = num % 10; j = num % 100;
    if (i === 1 && j != 11) {
        return i + "st";
    }
    if (i === 2 && j != 12) {
        return i + "nd";
    }
    if (i === 3 && j != 13) {
        return i + "rd";
    }
    return num + "th";
}