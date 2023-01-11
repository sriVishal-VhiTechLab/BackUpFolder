import { Data } from "./data.js";
const btn = document.querySelector("button");
const div = document.getElementById("container");
div.style.margin = '10px';
const generateDropDown = (inputData, parentTag, id) => {
      const createSpanTag = document.createElement('span');
      const createSelectTag = document.createElement('select');
      const selectTagId = `dropDown${id}`;
      createSpanTag.setAttribute("id", selectTagId);
      createSelectTag.innerHTML += '<option>Select</option>'
      if (inputData) {
            const firstOption = inputData.reduce((acc, inputData) => (
                  acc += `<option value="${inputData.name}">${inputData.name}</option>`
            ), ""
            );
            createSelectTag.innerHTML += firstOption;
            parentTag.appendChild(createSpanTag);
            createSpanTag.appendChild(createSelectTag);
      }
      createSelectTag.addEventListener('click', (event) => {
            const nestedData = inputData.find((element) => {
                  return element.name === event.target.value;
            });
            let deleteSpanTag = document.getElementById(selectTagId);
            if (deleteSpanTag.lastElementChild.tagName === 'SPAN') {
                  deleteSpanTag.lastChild.remove();
            }
            generateDropDown(nestedData.data, createSpanTag, id + 1);
      })
}
const viewDropdown = () => {
      generateDropDown(Data, div, 1);
}
btn.addEventListener('click', viewDropdown);
