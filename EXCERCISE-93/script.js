const obj = {
    Name: "Vishal",
    RegNo: 13,
    Department: "Computer Science",
    ClassId: 0013,
    libraryId: 98013,
}
console.log(obj);
function swap(Obj) {
    var tmpObj = {};
    for (var key in Obj) {
        tmpObj[Obj[key]] = key;
    }
    return tmpObj;
}
console.log(swap(obj));
// * Changes Done 