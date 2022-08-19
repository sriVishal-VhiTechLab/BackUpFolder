mainFunction = () => {
      let usrName = document.getElementById("nameInp").value;
      let usrJob = document.getElementById("occupInp").value;
      let usrPay = document.getElementById("salInp").value;
      let usrAge = document.getElementById("ageInp").value;
      let usrGender = document.getElementById("genInp").value;
      let renderObj = usrData(usrName, usrJob, usrPay, usrAge, usrGender);
      let result = checkEmptyObj(renderObj);
}
usrData = (name, job, sal, age, gender) => {
      let usrObj = {};
      usrObj.Name = name;
      usrObj.Occupation = job;
      usrObj.Salary = sal;
      usrObj.Age = age;
      usrObj.Gender = gender;
      return usrObj;
}
checkEmptyObj = (obj) => {
      let emptyValues = Object.keys(obj).filter(val => !obj[val]);// ! converts Empty object values to booleans. 
      console.log(emptyValues);
      document.getElementById("myPara").innerHTML = `THE FOLLOWING FIELDS ARE EMPTY<br>${emptyValues}`;
}
