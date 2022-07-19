function mainFunction() {
  let limit = Number(document.getElementById("usrInp").value);
  for (let i = 0; i <limit; i++) {
    let PN = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        PN = false;
      }
    }
    if (i > 0 && PN === true) {
      console.log(i);
    }
  }
}
