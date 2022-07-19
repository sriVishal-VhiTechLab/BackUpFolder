function mainFunction() {
  let inpUrl = document.getElementById("usrUrl").value;
  let outPut = parseUrl(inpUrl);
  console.log(outPut);
}
function parseUrl(url){
    let parser = document.createElement("a");
    parser.href= url;
    document.getElementById("myPara1").innerHTML = "HOST: "+parser.host+"<br>";
    document.getElementById("myPara2").innerHTML = "HOSTNAME: "+parser.hostname+"<br>";
    document.getElementById("myPara3").innerHTML = "PATHNAME: "+parser.pathname+"<br>";
}
// EXAMPLE URL: https://flexiple.com/get-last-array-element-javascript/
// EXAMPLE URL: https://geeksforgeeks.org/pathname/?search=query