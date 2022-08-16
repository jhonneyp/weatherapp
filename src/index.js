const button = document.querySelector('button')
const query = document.querySelector('#input')
const root = document.querySelector('#root')

let val
const URL = 'https://api.openweathermap.org/geo/1.0/direct?q='

const KEY = '7769df492db2a8854a6ae56462f5121f'

const fetchcity = async () => {
    val = query.value
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${KEY}`)
    const data = await response.json()

    return data
}


const createCard = () => {
    const weather = fetchcity()

    const card = document.createElement('div')
    card.className = 'weather_card'
    
    const cardDetails = document.createElement('div')
    card.className = 'weather_card__details'
    
    const cityName = document.createElement('p')
    cityName.className = 'weather_card__details__cityname'
    cityName.innerText = `${weather}`
    
    const country = document.createElement('span')
    card.className = 'weather_card__details__country'
    
    const temperature = document.createElement('p')
    card.className = 'weather_card__details__temperature'
    
    const centigrade = document.createElement('span')
    card.className = 'weather_card__details__centigrade'
    
    const cardImg = document.createElement('div')
    card.className = 'weather_card__img'
    
    const weatherImg = document.createElement('img')
    card.className = 'weather_card__img__img'
    
    const weatherDescription = document.createElement('p')
    card.className = 'weather_card__img__text'
    
    return card
}

const addCard = () => {
    const newCard = createCard()
    root.append(newCard)
}


button.addEventListener('click', addCard)