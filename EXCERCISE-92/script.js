mainFunction = () => {
    let usrInp = document.getElementById("usrInp").value; debugger;
    let exampleObject = createObj('vishal', '19', '22 - 12 - 2002', 'male');
    console.log(exampleObject);
    let result = checkForProperty(exampleObject, usrInp);
    if (result === true) {
        document.getElementById("myPara").innerHTML = `${usrInp} is Present In The Above Object`;
    }
    else {
        document.getElementById("myPara").innerHTML = `${usrInp} is not Present In the Above Object`;
    }
}
createObj = (Name, age, dob, gender) => {
    let details = {};
    details.NAME = Name;
    details.AGE = age; 
    details.DOB = dob;
    details.GENDER = gender;
    return details;
}
checkForProperty = (obj, property) => {
    if (obj.hasOwnProperty(property) === true) {
        return true;
    }
    else {
        return false;
    }
}