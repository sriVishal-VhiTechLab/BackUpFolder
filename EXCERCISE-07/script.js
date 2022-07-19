let initDate = new Date('01/01/2022');
let finalDate = new Date();
let oneDay= 1000*60*60*24;
let timeDiff = finalDate.getTime() - initDate.getTime();
let dateDiff = timeDiff/ oneDay;
document.write(`Total Days From Beggining Of the Year is ${dateDiff.toFixed(0)}`);


