mainFunction = () => {
    let number = Number(document.getElementById("multipleInput").value);
    let multiple = Number(document.getElementById("multiplierInput").value);
    let resultArray = printMultiple(number, multiple);
    document.getElementById("dispMultiples").innerHTML = `THE MULTIPLES OF ${number} : [${resultArray}]`;
}
printMultiple = (num, mul) => {
    if (num < 1 && mul < 1 || num.length === 0 && mul.length === 0) {
        document.getElementById("dispMultiples").innerHTML = `Please Fill In Valid Integers`;
    }
    else {
        let val;
        const displayMultiples = [];
        for (let i = 1; i <= mul; i++) {
            val = num * i;
            displayMultiples.push(val);
        }
        return displayMultiples;
    }
}
// *let
// !validations