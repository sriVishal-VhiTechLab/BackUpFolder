// function mainFunction() {
//     let usrInp = document.getElementById("usrInp").value;
//     // Mastercard cards begin with a 5 and has 16 digits. American Express cards begin with a 3, followed by a 4 or a 7
//     // and has 15 digits. Discover cards begin with a 6 and have 16 digits. Diners Club and Carte Blanche cards begin with a 3, 
//     // followed by a 0, 6, or 8 
//     // and have 14 digits.
//     let outPut = findCredit(usrInp);
//     console.log(outPut);
// }
// function findCredit(str) {
//     let strIndex = str.charAt(0);
//     let strLength = str.length;
//     if (strLength == 16 && strIndex == 5) {
//         document.getElementById("myPara").innerHTML = `This Card Number Is Valid For MasterCards.`;
//     }
//     if (strLength == 16 && strIndex == 6) {
//         document.getElementById("myPara").innerHTML = `This Card Number Is Valid For Discover Cards.`;
//     }
//     if (strLength == 15 && (str.startsWith("34") || str.startsWith("37"))) {
//         document.getElementById("myPara").innerHTML = `This Card Number Is Valid For American Express Cards.`;
//     }
//     if (strLength == 14 && (str.startsWith("30") || str.startsWith("36") || str.startsWith("38"))) {
//         document.getElementById("myPara").innerHTML = `This Card Number Is Valid For Diners Club Cards.`;

//     }
//     else {
//         document.getElementById("myPara").innerHTML = `Card Number is Out Of Scope!`;

//     }
// }
mainFunction = () => {
    let usrInp = document.getElementById("usrInp").value;
    // Mastercard cards begin with a 5 and has 16 digits. American Express cards begin with a 3, followed by a 4 or a 7
    // and has 15 digits. Discover cards begin with a 6 and have 16 digits. Diners Club and Carte Blanche cards begin with a 3, 
    // followed by a 0, 6, or 8 
    // and have 14 digits.
    let masterRegex = /[5][0-9]{15}/;
    let americanRegex = /[3][4|7][0-9]{13}/;
    let discoverRegex =/[6][0-9]{15}/;
    let dinerRegex = /[3][0|6|8][0-9]{12}/;
    if (usrInp.match(masterRegex)) {
        document.getElementById("myPara").innerHTML = `This Card Number Is Valid For MasterCards.`;
    }
    if (usrInp.match(americanRegex)) {
        document.getElementById("myPara").innerHTML = `This Card Number Is Valid For American Cards.`;
        
    }
    if (usrInp.match(discoverRegex)) {
        document.getElementById("myPara").innerHTML = `This Card Number Is Valid For Discover Cards.`;
        
    }
    if (usrInp.match(dinerRegex)) {
        document.getElementById("myPara").innerHTML = `This Card Number Is Valid For Diner Cards.`;
        
    }
    else{
        document.getElementById("myPara").innerHTML = `Not A Valid Card Number`;
        
    }
}