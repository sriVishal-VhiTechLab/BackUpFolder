const cityName = document.getElementById("cityName");
const cityDisp = document.getElementById("city")
const tempDisp = document.getElementById("temp")
const decpDisp = document.getElementById("desp")
const btn = document.getElementById("btn");
btn.addEventListener('click', () => {
      fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName.value.toLowerCase() + '&appid=b4b79d3a11f01789c479ff5bb43788fc')
            .then(response => response.json())
            .then(data => {
                  console.log(data);
                  cityDisp.innerHTML = "City Name : " + data['name']
                  tempDisp.innerHTML = "Temparature : " + data['main']['feels_like']
                  decpDisp.innerHTML = "Description : " + data['weather'][0]['main']
            })
            .catch(err => alert("Enter Valid City"))
})