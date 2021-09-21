const button = document.querySelector('.button')
const inputValue = document.querySelector('.inputValue')
const cityName = document.querySelector('.name');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');

const handleButtonSubmit = () => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=f3192fd842a1d8257f16f61d64c0c3d9&lang=es&units=metric`)
    .then(Response => Response.json())
    .then(data => {
      const nameValue = data ? data.name : 'Valor inválido.';
      const tempValue =  data ? data.main.temp : 'Valor inválido.';
      const descValue = data ? data.weather[0].description : 'Valor inválido.';

      cityName.innerHTML =  `Ciudad: ${nameValue}`;
      temp.innerHTML = `Temperatura : ${tempValue} °C`;;
      desc.innerHTML =  `Descripción del clima: ${descValue}`;

    })

    .catch(err => alert(`Error: ${err}`))
}