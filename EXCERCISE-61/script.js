function mainFunction() {
for(let i=0; i<1001; i++) {
      let sum = 0;
      let temp =i;
      let numberOfDigits = i.toString().length;//length can be found only after converting to string.
      while(temp>0){
          let remainder = temp%10;
          sum += remainder ** numberOfDigits;
          temp = parseInt(temp/10); //to convert the float to integer, stop the while loop also.
      }
      if(sum === i) {
            console.log(i);
      }
}
}

