mainFunction = () => {
      debugger;
      let usrData = readFormData();
      renderTable(usrData);
}
readFormData = () => {
      let FormData = {};
      FormData["fullName"] = document.getElementById("nameInp").value;
      FormData["Occupation"] = document.getElementById("occupInp").value;
      FormData["mailId"] = document.getElementById("mailInp").value;
      FormData["salary"] = document.getElementById("salInp").value;
      return FormData;
}
renderTable = (obj) => {
      let crudTable = document.getElementById("crudBody");
      let crudRow = crudTable.insertRow(0);
      let nameCell = crudRow.insertCell(0);
      let occupCell = crudRow.insertCell(1);
      let salCell = crudRow.insertCell(2);
      let mailCell = crudRow.insertCell(3);
      nameCell.innerHTML = obj.fullName;
      occupCell.innerHTML = obj.Occupation;
      salCell.innerHTML = obj.salary;
      mailCell.innerHTML = obj.mailId;
      let editCell = crudRow.insertCell(4);
      editCell.innerHTML = "<a>EDIT</a><a>DELETE</a>";
}
