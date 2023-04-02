let weatherForm = document.querySelector('.weather__form')
let inputCity = document.querySelector('.weather__city')
let apiDataConteiner = document.querySelector(".weather__data")

let apiUrl = "https://api.weatherapi.com/v1/current.json?key=ce907bc63f07404485c131208230104&aqi=yes&q="


weatherForm.addEventListener("submit", (event) => {
    let city = inputCity.value;
    let fullApiUrl = apiUrl + city

    fetch(fullApiUrl).then(response => response.json()).then((dataFromApi) => {
        // console.log(dataFromApi.current.temp_c)
        let view = ``

        // data
        // view += `W ${dataFromApi.location.name} jest dzisiaj ${dataFromApi.current.temp_c} stopni celciusza.`

        view += `<div class="weather__info">`
        // county, city, time(region)
        view += `<div class="weather__region"> 
                </p>${dataFromApi.location.name}</p>
                </p>${dataFromApi.location.country}</p>
                <p> ${dataFromApi.location.localtime}</p>
        </div>`

        //icon
        view += `<div class="weather__icon"><img src= ${dataFromApi.current.condition.icon} 
        alt = ${dataFromApi.current.condition.text}></div >`
        //temp
        view += `<div class="weather__temp"> ${dataFromApi.current.temp_c} <span>&degC</span></div >`

        //details
        view += `<div class="weather__details">
                <p>The amount of rainfall: ${dataFromApi.current.precip_mm}mm </p>
                <p>Humidity: ${dataFromApi.current.humidity}%</p>
                <p>Wind: ${dataFromApi.current.wind_kph}km/h</p>
            </div>`

        view += `</div>`

        apiDataConteiner.innerHTML = view

    })

    event.preventDefault()
})