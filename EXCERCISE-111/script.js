let testObj = [
      {
            name: 'vishal',
            id: 1,
            department: 'computer'
      },
      {
            name: 'vinoth',
            id: 3,
            department: 'computer'
      },
      {
            name: 'vineeth',
            id: 2,
            department: 'computer'
      },
      {
            name: 'vishwa',
            id: 2,
            department: 'computer'
      },
      {
            name: 'vivek',
            id: 2,
            department: 'computer'
      },
      {
            name: 'vishwa',
            id: 2,
            department: 'computer'
      }, {
            name: 'vishwa',
            id: 2,
            department: 'computer'
      }, {
            name: 'vishwa',
            id: 2,
            department: 'computer'
      }, {
            name: 'vishwa',
            id: 2,
            department: 'computer'
      }, {
            name: 'vishwa',
            id: 2,
            department: 'computer'
      }, {
            name: 'vishwa',
            id: 2,
            department: 'computer'
      },
      {
            name: 'vishwa',
            id: 2,
            department: 'computer'
      }, {
            name: 'vishwa',
            id: 2,
            department: 'computer'
      }, {
            name: 'vishwa',
            id: 2,
            department: 'computer'
      }, {
            name: 'vishwa',
            id: 2,
            department: 'computer'
      }, {
            name: 'vishwa',
            id: 2,
            department: 'computer'
      }, {
            name: 'vishwa',
            id: 2,
            department: 'computer'
      }, {
            name: 'vishwa',
            id: 2,
            department: 'computer'
      }, {
            name: 'vishwa',
            id: 2,
            department: 'computer'
      }, {
            name: 'vishwa',
            id: 2,
            department: 'computer'
      }, {
            name: 'vishwa',
            id: 2,
            department: 'computer'
      }, {
            name: 'vishwa',
            id: 2,
            department: 'computer'
      }, {
            name: 'vishwa',
            id: 2,
            department: 'computer'
      }, {
            name: 'vishwa',
            id: 2,
            department: 'computer'
      },

];

mainFunction = () => {
      const newKey = document.getElementById('newKey').value;
      const oldKey = document.getElementById('oldKey').value;
      const outPara = document.getElementById('Para');
      testObj.map((obj) => {
            obj[newKey] = obj[oldKey];
            delete obj[oldKey];
            return obj
      })
      outPara.innerHTML = `${JSON.stringify(testObj)}`
}




