function mainFunction() {
    let numberOfLines = Number(document.getElementById("usrNum").value);
    let str = "";
    for (let i = 1; i <= numberOfLines; i++) /*Lines*/ {
        for (let j = 1; j <= numberOfLines - i; j++) /*Spaces*/ {
            str += "&nbsp&nbsp";
        }
        for (let k = 1; k <= i; k++)/*NUMBERS*/ {
            str += (k > 9) ? k % 10 : k;
        }
        for (let l = i - 1; l > 0; l--) {
            str += (l > 9) ? l % 10 : l;
        }
        str += "<br/>";
    }
    for (i = numberOfLines - 1; i > 0; i--) {
        for (j = 1; j <= numberOfLines - i; j++) {
            str += "&nbsp&nbsp";
        }
        for (k = 1; k <= i; k++) {
            str += (k > 9) ? k % 10 : k;
        }
        for (l = i - 1; l > 0; l--) {
            str += (l > 9) ? l % 10 : l;
        }
        str += "<br/>"
    }
    document.getElementById("myPara").innerHTML = str;
}