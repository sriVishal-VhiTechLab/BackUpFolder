mainFunction = () => {
    let number = Number(document.getElementById("usrInp1").value);
    let multiple = Number(document.getElementById("usrInp2").value);
    let resultArray = printMultiple(number, multiple);
    document.getElementById("myPara").innerHTML = `THE MULTIPLES OF ${number} : [${resultArray}]`;
}
printMultiple = (num, mul) => {
    let val;
    let Arr = [];
    for (i = 1; i <= mul; i++) {
        val = num * i;
        Arr.push(val);
    }
    return Arr;
}
