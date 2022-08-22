function mainFunction() {
	let usrRad = Number(document.getElementById("radius").value);
	let usrHeight = Number(document.getElementById("height").value);
	let tsa = totSurfaceArea(usrHeight, usrRad);
	let lsa = latSurfaceArea(usrHeight, usrRad);
	let vol = volOfCyclinder(usrHeight, usrRad);
	document.getElementById(
		"myPara3"
	).innerHTML = `Volume Of The Cyclinder is ${vol.toFixed(4)} Square Units`;
	document.getElementById("myPara1").innerHTML = `Total Surface Area Of The Cyclinder is ${tsa.toFixed(
		4
	)} Square Units`;
	document.getElementById(
		"myPara2"
	).innerHTML = `Lateral Surface Area Of The Cyclinder is ${lsa.toFixed(
		4
	)} Square Units`;
}
function totSurfaceArea(hei, rad) {
	let tArea = 2 * 3.14 * rad * (hei + rad);
	return tArea;
}
function latSurfaceArea(hei1, rad1) {
	let lArea = 2 * 3.14 * rad1 * hei1;
	return lArea;
}
function volOfCyclinder(hei2, rad2) {
	let vol = 3.14 * rad2 * rad2 * hei2;
	return vol;
}
//*Changes Done.
