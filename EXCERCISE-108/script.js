let tempArray = [];
document.getElementById("numDisp").addEventListener('click', () => {
      let rollNum = Math.floor(Math.random() * 7);
      if (rollNum === 0 || rollNum === 1) {
            document.getElementById("numbDisp").style.color = 'red';
            document.getElementById("numbDisp").style.fontSize = '40px';
            document.getElementById("numbDisp").innerHTML = `Bad Luck`;
            tempArray.push(0);
      }
      else if (rollNum === 6) {
            document.getElementById("numbDisp").style.color = 'green';
            document.getElementById("numbDisp").style.fontSize = '30px';
            document.getElementById("numbDisp").innerHTML = `JackPot!`;
            tempArray.push(12);

      }
      else {
            document.getElementById("numbDisp").style.color = 'black';
            document.getElementById("numbDisp").style.fontSize = '97px';
            document.getElementById("numbDisp").innerHTML = `${rollNum}`;
            tempArray.push(rollNum);
      }
      console.log(tempArray);
      let sum = 0;
      tempArray.map(x => {
            sum += x;
      });
      document.getElementById("lqDisp").innerHTML = `${sum}`;
})




