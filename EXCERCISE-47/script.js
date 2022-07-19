function mainFunction(){
      let usrNumerator = Number(document.getElementById("numValue").value);
      let usrDenominator = Number(document.getElementById("denValue").value);
      let y = usrNumerator/usrDenominator;
      let resultPercentage = y*100;
      console.log(`${resultPercentage}%`);

      
}