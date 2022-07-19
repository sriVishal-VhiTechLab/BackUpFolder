mainFunction = () => {
    let sister1 = [[4, 3], [2, 4], [1, 2]];
    let sister2 = [[6, 2], [4, 2], [1, 2]];
    let prodFirstArray = multiplyArray(sister1);
    let prodSecArray = multiplyArray(sister2);
    console.log(prodFirstArray);
    console.log(prodSecArray);
    let result = compare(prodFirstArray,prodSecArray);
    if(result === false){
        document.getElementById("myPara").innerHTML = `Not all Iterations Match`;
    }
    else{
        document.getElementById("myPara").innerHTML = `Iterations Match! So Share Is Done Correctly`
    }
}
function multiplyArray(arr) {
    let product = [];
    for (var i = 0; i < arr.length; i++) {
        product.push(arr[i][0] * arr[i][1]);
    }
    return product;
}
function compare(arr1,arr2){
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (var i = 0, len = arr1.length; i < len; i++){
        if (arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true; 
}