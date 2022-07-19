function mainFunction() {
  let rad = Number(document.getElementById("usrRad").value);
  let periMeter = cirCumFerence(rad);
  document.getElementById("myPara1").innerHTML =
    `The Perimeter Of the Circle is : ${periMeter} Centimeter Square.`;
  let Area = area(rad);
  document.getElementById("myPara2").innerHTML =
    `The area Of the Circle is : ${Area} Centimeter Square.`;
}
function cirCumFerence(radius) {
  let c = 2 * 3.14 * radius;
  return c.toFixed(2);
}
function area(radius) {
  let ar = 3.14 * radius * radius;
  return ar.toFixed(2);
}
