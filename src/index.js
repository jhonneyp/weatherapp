import {kelvinToCelsius} from "./utils/kelvinToCelcius.js"

const button = document.querySelector('button')
const query = document.querySelector('#input')
const root = document.querySelector('#root')

let val
const URL = 'https://api.openweathermap.org/geo/1.0/direct?q='

const KEY = '7769df492db2a8854a6ae56462f5121f'

const createCard = async () => {
    val = query.value
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${KEY}`)
    const data = await response.json()

    const { name, sys , main, weather } = data

    console.log(name, sys , main, weather)

    const card = `
    <div class="card">
    <sup class="card__x">X</sup>
    <div class="card__details">
        <p class="card__details__title" >${name} <sup>${sys.country}</sup></p>
        <p class="card__details__celcius">${kelvinToCelsius(main.temp)}<span>°C</span></p>
    </div>
    <div class="card__image">
        <img src="https://openweathermap.org/img/wn/04n@2x.png" alt="">
        <p>${weather[0].main}</p>
    </div>
    `
    root.innerHTML += card
    query.value = ""
}



button.addEventListener('click', createCard)
query.addEventListener('keypress', (e)=>{
    if (e.key === 'Enter') {
        createCard()
      }
})