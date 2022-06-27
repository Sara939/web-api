// const BASIC_API= "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

async function weatherbycity() {
    try {
        return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectionId.value}&appid=2953aef29193799200291ca2b5e3f722`)
            .then(res => res.json())
    }
    catch (err) { }
    finally { }
}

// console.log(weatherbycity());



function shownameandcountry() {
    weatherbycity().then(res =>
        mydiv.innerHTML += `<h2>Weather feels like:${res.main.feels_like}<br> Coutry : ${res.sys.country}</h2>`)
}
