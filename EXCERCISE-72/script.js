function mainFunction() {
  let zipCode = Number(document.getElementById("usrInp").value);
  console.log(zipCode);
  let zipLength = zipCode.toString().length;
  console.log(zipLength);
  if (zipLength === 5) {
    document.getElementById(
      "myPara"
    ).innerHTML = `Your Input Is A Valid Zip Code`;
  } else {
    document.getElementById("myPara").innerHTML = `Enter A Valid Zipcode`;
  }
}
