function mainFunction() {
  let inpUrl = document.getElementById("usrUrl").value;
  let outPut = parseUrl(inpUrl);
  console.log(outPut);
}
function parseUrl(urlText) {
  let parser = document.createElement("a");
  parser.href = urlText;
  document.getElementById("myPara1").innerHTML = "HOST: " + parser.host + "<br>";// => "example.com:3000"
  document.getElementById("myPara2").innerHTML = "HOSTNAME: " + parser.hostname + "<br>"; // => "example.com"
  document.getElementById("myPara3").innerHTML = "PATHNAME: " + parser.pathname + "<br>";// => "/pathname/"
  document.getElementById("myPara4").innerHTML = "PROTOCOL: " + parser.protocol + "<br>";// => "http:"
  document.getElementById("myPara5").innerHTML = "PORT: " + parser.port + "<br>";// => "3000"
  document.getElementById("myPara6").innerHTML = "HASH NUMBER: " + parser.hash + "<br>";// => "#hash"

}
// EXAMPLE URL: https://flexiple.com/get-last-array-element-javascript/
// EXAMPLE URL: https://geeksforgeeks.org/pathname/?search=query
