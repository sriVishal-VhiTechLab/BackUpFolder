mainFunction = () => {
    let usrArr = document.getElementById("usrArr").value;
    let usrNum = document.getElementById("usrNum").value;
    let splitArray = usrArr.split(" ");
    document.getElementById("myPara").innerHTML = `The Intial Array is : [${splitArray}]`;
    let pushNumber = splitArray.push(usrNum);
    let removeElement = splitArray.shift();
    document.getElementById("myPara2").innerHTML = `The FInal Array is : [${splitArray}]`;
}