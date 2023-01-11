const person = {
      first_name: 'Monica',
      last_name: 'Geller',
      phone: '915-996-9739',
      email: 'monica37@gmail.com',
      address: {
            street: '495 Grove Street',
            city: 'New York',
            country: 'USA',
      },
      marks1: ["math : 100", "science: 89", "english: 78", "Tamil: 67"],
      marks2: {
            math: 100, science: 89, english: 78, Tamil: 67
      }
};
let keys = Object.keys(person);
let values = Object.values(person);
const keysDataType = keys.map(ele => {
      return typeof (ele);
})
const valDataType = values.map(ele => {
      return typeof (ele);
})
console.log(keysDataType);
console.log(valDataType);
compareArrays = (arr1, arr2) => {
      if (arr1.length != arr2.length) {
            return false;
      }
      else {
            for (let i = 0; i < arr1.length; i++) {
                  if (arr1[i] != arr2[i]) {
                        return false;
                  }
                  else {
                        result = true;
                  }

            }
            return result;

      }

}
console.log(compareArrays(keysDataType, valDataType));
// * CHANGES DONE !