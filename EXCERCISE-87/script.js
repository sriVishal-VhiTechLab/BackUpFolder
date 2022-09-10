mainFunction = () => {
    let totalAmount = Number(document.getElementById("usrAmount").value);
    let totalCoinsArray = document.getElementById("usrCents").value;
    let coinsArray = totalCoinsArray.split(",");
    console.log(coinsArray[0]);
    let result = denominateAmount(totalAmount, coinsArray);
    document.getElementById("myPara").innerHTML = `The Possible Denominations: ${result}`
}
denominateAmount = (amount, coinsArr) => {
    if (amount == 0) {
        return [];
    }
    else {
        if (amount >= coinsArr[0]) {
            let differenceAmount = (amount - coinsArr[0]);
            return [coinsArr[0]].concat(denominateAmount(differenceAmount, coinsArr))
        }
        else {
            coinsArr.shift();
            return denominateAmount(amount, coinsArr);
        }
    }
}

// *cleared 