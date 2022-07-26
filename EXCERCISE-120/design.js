mainFunction = () => {
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
      editCell.innerHTML = '<button class="btn btn-success edit" onclick="editData(this)">EDIT</button><button onclick="deleteData()" class="btn btn-danger del">DELETE</a>';
}
deleteData = () => {
      let confirm = window.confirm("Are You You Want Delete The Data In The Current Row?");
      if (confirm === true) {
            let deleteOperation = document.getElementById("crudBody");
            let deleteCurrent = deleteOperation.deleteRow(0);
            alert("Deleted SuccessFully.");
      }
}
switchTheme = () => {
      let dTheme = document.body;
      dTheme.classList.toggle("themeIcon");
}
editData = (td) => {
      let confirmEdit = window.confirm("Do You Want To make Changes In your Data!");
      if (confirmEdit === true) {
            let currentRow = td.parentElement.parentElement;
            console.log(currentRow);
            document.getElementById("nameInp").value = currentRow.cells[0].innerHTML;
            document.getElementById("occupInp").value = currentRow.cells[1].innerHTML;
            document.getElementById("mailInp").value = currentRow.cells[2].innerHTML;
            document.getElementById("salInp").value = currentRow.cells[3].innerHTML;
            alert("Now You Can Edit Your Data In Specific Fields");
            let deleteAndEdit = document.getElementById("crudBody");
      }
}
