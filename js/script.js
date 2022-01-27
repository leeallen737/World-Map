let countriesWithA = [];
let languagesMauritius = [];
let greaterThan50Million = []

let country = data.countries.country.forEach( (singleCountry) => {
  if(singleCountry.countryName[0] === 'A') {
    countriesWithA.push(singleCountry.countryName);
  }
  if(singleCountry.countryName.includes('Mauritius')) {
    languagesMauritius.push(singleCountry.languages);
  }
  if(singleCountry.population > 50000000) {
    greaterThan50Million.push(singleCountry.countryName);
  }
})

//add Countries beginning with A divs

for (let i = 0; i < countriesWithA.length; i++) {
  let country_container = document.createElement('DIV');
  country_container.className = `country-container ${countriesWithA[i]}`;
  document.getElementById('body').appendChild(country_container);
  
  let countryDiv = document.createElement('DIV');
  countryDiv.className = 'text-box country';
  document.getElementsByClassName(`country-container ${countriesWithA[i]}`)[0].appendChild(countryDiv);
  let textNode = document.createTextNode(countriesWithA[i]);
  document.getElementsByClassName('text-box country')[i].appendChild(textNode);
  
  let country_led = document.createElement('DIV');
  country_led.className = 'led blink';
  document.getElementsByClassName(`country-container ${countriesWithA[i]}`)[0].appendChild(country_led);
}

//add button click functio for Countries beginning with 'A'

let startingA = document.querySelector('#startingA');

startingA.addEventListener('click', () => {
  let countries = document.querySelectorAll('.country-container');
  countries.forEach(country => {
    if(country.className.includes('toggle')) {
      country.classList.remove('toggle');
    }else {
      country.classList.add('toggle');
    }
    
  })
})

//Countires with Population over 50m+

for (let i = 0; i < greaterThan50Million.length; i++) {
  let countryPops_container = document.createElement('DIV');
  countryPops_container.className = `countryPops-container ${greaterThan50Million[i]}`;
  document.getElementById('body').appendChild(countryPops_container);
  
  let countryPopsDiv = document.createElement('DIV');
  countryPopsDiv.className = 'text-box countryPopulation';
  document.getElementsByClassName(`countryPops-container ${greaterThan50Million[i]}`)[0].appendChild(countryPopsDiv);
  let textNode = document.createTextNode(greaterThan50Million[i]);
  document.getElementsByClassName('text-box countryPopulation')[i].appendChild(textNode);
  
  let country_led_red = document.createElement('DIV');
  country_led_red.className = 'led_red blink';
  document.getElementsByClassName(`countryPops-container ${greaterThan50Million[i]}`)[0].appendChild(country_led_red);
  console.log(countryPops_container);
}

//add button click functio for Population over 50m+

let plus50m = document.querySelector('#population');

plus50m.addEventListener('click', () => {
  let countryPops = document.querySelectorAll('.countryPops-container');
  countryPops.forEach(country => {
    if(country.className.includes('toggle')) {
      country.classList.remove('toggle');
    }else {
      country.classList.add('toggle');
    }
    
  })
})