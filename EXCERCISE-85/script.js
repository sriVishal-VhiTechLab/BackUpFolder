mainFunction = () => {
    debugger
    const sister1 = [[4, 3, 2], [1, 2, 3], [1, 2, 2]];
    const sister2 = [[4, 3, 2], [1, 2, 3], [1, 2, 2]];
    const resultDimension1 = calculateDimension(sister1);
    const resultDimension2 = calculateDimension(sister2);
    let equateDimension = compare(resultDimension1, resultDimension2);
    if (equateDimension === false) {
        document.getElementById("resultPara").innerHTML = `Not all Iterations Match`;
    }
    else {
        document.getElementById("resultPara").innerHTML = `Iterations Match! So Share Is Done Correctly`
    }
}
calculateDimension = (arr) => {
    const evaluateDimensions = arr.map(Element => {
        const product = Element.reduce((acc, value) => acc * value, 1);
        return product;
    }
    )
    return (evaluateDimensions);
}
compare = (arr1, arr2) => {
    let len = arr1.length;
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (var i = 0; i < len; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}