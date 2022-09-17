fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.text())
      .then((data) => console.log(JSON.stringify(data)));