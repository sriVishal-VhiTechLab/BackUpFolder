let multipler = 2; // ? This Variable is Declared Globally.
const inpArr = [];
document.getElementById("addEle").addEventListener('click', () => {
    let usrVal = Number(document.getElementById("usrInpArr").value);
    inpArr.push(usrVal);
});
mainFunction = () => {
    let usrCount = Number(document.getElementById("usrInp2").value);
    let additiveNumber = usrCount * multipler;
    let result = arrOperation(inpArr, additiveNumber);
    console.log(inpArr);
    document.getElementById("resultPara").innerHTML = `${result}`;
}
arrOperation = (arr, addNum) => {
    const calculate = arr.map(Element => {
        if (Element % multipler === 0) {
            Element += addNum;
        }
        else {
            Element -= addNum;
        }
        return Element;
    })
    return calculate;
}
// *Change the input array methodd get the value one by one and push to array
// *avoid hardcoding
// *change the condition in loop
// *remove for loop 



