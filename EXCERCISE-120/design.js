let selectedRow = null;
mainFunction = () => {
      let usrData = readFormData();
      if (selectedRow == null) {
            renderTable(usrData);
      }
      else {
            updateData(usrData);
            let dispDelModal = document.querySelector('#updateModal');
            dispDelModal.showModal();
            let closeBtn = document.querySelector('#closeBtn');
            closeBtn.addEventListener('click', () => {
                  dispDelModal.close();
            })
      }
      resetForm();
      let dispInsModal = document.querySelector('#insertModal');
      dispInsModal.showModal();
      let closeBtn = document.querySelector('#closeBtn1');
      closeBtn.addEventListener('click', () => {
            dispInsModal.close();
      })

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
      salCell.innerHTML = obj.mailId;
      mailCell.innerHTML = obj.salary;
      let editCell = crudRow.insertCell(4);
      editCell.innerHTML = '<button class="btn btn-success edit" onclick="editInpData(this)">EDIT</button><button onclick="deleteData(this)" class="btn btn-danger del">DELETE</button>';
}
editInpData = (td) => {//This Function is Called by EDIT Button.
      selectedRow = td.parentElement.parentElement;
      console.log(selectedRow);
      document.getElementById("nameInp").value = selectedRow.cells[0].innerHTML;
      document.getElementById("occupInp").value = selectedRow.cells[1].innerHTML;
      document.getElementById("mailInp").value = selectedRow.cells[2].innerHTML;
      document.getElementById("salInp").value = selectedRow.cells[3].innerHTML;
}
updateData = (newData) => {
      selectedRow.cells[0].innerHTML = newData.fullName;
      selectedRow.cells[1].innerHTML = newData.Occupation;
      selectedRow.cells[2].innerHTML = newData.salary;
      selectedRow.cells[3].innerHTML = newData.mailId;
}
deleteData = (td) => {//This Function is Called by Delete Button.
      if (confirm("Are You Sure To Delete The Existing Record")) {
            debugger;
            let row = td.parentElement.parentElement;
            document.getElementById("crudBody").deleteRow(row.rowIndex);
            resetForm();
      }
}
resetForm = () => {
      document.getElementById("nameInp").value = "";
      document.getElementById("mailInp").value = "";
      document.getElementById("occupInp").value = "";
      document.getElementById("salInp").value = "";
      selectedRow = null;
}


