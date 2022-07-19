mainFunction = () => {
  let usrText = document.getElementById("usrSentence").value;
  let splitText = usrText.split(" ");
  let suffix = document.getElementById("findWord").value;
  let result = checkForSuffix(splitText, suffix);
}
checkForSuffix = (arr, suffText) => {
  let lastElement = arr.splice(-1);
  if (suffText == lastElement) {
    document.getElementById("myPara").innerHTML = `${suffText} is Proper Suffix! and Present In Given Sentence`;
  }
  else {
    document.getElementById("myPara").innerHTML = `${suffText} is Not Proper Suffix! and Absent Given In Sentence`

  }
}
