mainFunction = () => {
      document.getElementById("nameList").style.display = "block"
}
getUsrName = (val) => {
      let selectedOption = document.getElementById("nameList");
      val = selectedOption.options[selectedOption.selectedIndex].text;
      console.log(val);
}
createList = (word) => {
      let num;
      for (let i = 1; i <= 4; i++) {
            let list = document.getElementById("dispList");
            let listOption = document.createElement("option");
            listOption.value= "Siva";
            listOption.innerHTML="Siva";
            list.appendChild(listOption);
      }


}
createList();
