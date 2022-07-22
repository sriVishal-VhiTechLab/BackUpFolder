mainFunction = () => {
      debugger;
      let usrData = readFormData();
      let result = insertData(usrData);
      console.log(result);
}
readFormData = () => {
      let FormData = {};
      FormData["fullName"] = document.getElementById("nameInp").value;
      FormData["Occupation"] = document.getElementById("occupInp").value;
      FormData["mailId"] = document.getElementById("mailInp").value;
      FormData["salary"] = document.getElementById("salInp").value;
      return FormData;
}
