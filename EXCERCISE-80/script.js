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