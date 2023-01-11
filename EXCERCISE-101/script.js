const out_Array = [];
printRange = () => {
      let srtNumber = Number(document.getElementById("usrNum1").value);
      let endNumber = Number(document.getElementById("usrNum2").value);
      for (let i = srtNumber+1; i < endNumber; i++) {
            out_Array.push(i);
      }
      document.getElementById("myPara").innerHTML = "["+out_Array+"]";
}