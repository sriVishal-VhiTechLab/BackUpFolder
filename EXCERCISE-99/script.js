function mainFunction() {
    let usrNum = Number(document.getElementById("usrInp").value);
    let result = perfectNumber(usrNum);
}
perfectNumber = (num) => {
    let temp = 0;
    for (let i = 0; i <= num / 2; i++) {
        if (num % i === 0) {
            temp += i;
        }
    }
    if (num === temp) {
        document.getElementById("myPara").innerHTML = `${num} is A Perfect Number`;
    }
    else {
        document.getElementById("myPara").innerHTML = `${num} is Not A Perfect Number`;

    }
}