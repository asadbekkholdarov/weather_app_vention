const input = document.querySelector('input')
const search = document.querySelector('button')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const weatherImage = document.querySelector('.main_weather_img')
const wind = document.querySelector('.wind_rate')
const humidity = document.querySelector('.humidity_rate')









function getData(){
    let key = '474e403ebe1a0a34b0bc91a846e9e304'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=` + input.value + `&units=metric&appid=`+key)
       .then(res=>res.json())
       .then(data=>{
        city.innerHTML = data.name
        temp.innerHTML = Math.floor(data.main.temp)
        wind.innerHTML = Math.floor(data.wind.speed)
        humidity.innerHTML = Math.floor(data.main.humidity)
       })
}
search.addEventListener('click', ()=>{
    getData()
})