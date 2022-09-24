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
Object.entries(person).forEach(Element => {
      debugger
      Element.forEach(ele => {
            console.log(typeof (Element));
            console.log(typeof (ele));
      })
})
