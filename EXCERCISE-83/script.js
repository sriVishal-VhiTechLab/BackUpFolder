mainFunction = () => {
    let usrArr = document.getElementById("usrInp1").value;
    let usrCount = Number(document.getElementById("usrInp2").value);
    let splitArray = usrArr.split(' ').map(Number);
    let additiveNumber = usrCount * 2;
    let result = arrOperation(splitArray, additiveNumber);
    console.log(result);
}
arrOperation = (arr, addNum) => {
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] % 2 == 0) {
            arr[i] += addNum;
        }
        else {
            arr[i] -= addNum;
        }
    }
    return arr;

}
