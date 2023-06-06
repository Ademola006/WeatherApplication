// FETCHING API

let submit = document.querySelector("#submit")

let humidityImg = document.querySelector(".humidityImg")
let windImg = document.querySelector(".windImg")

humidityImg.style.display = "none"
windImg.style.display = "none"

submit.addEventListener("click", ()=>{
    const key ="c038514c7c4414527268faaf6c33283b"
    let input = document.querySelector("#input").value

    // humidityImg.style.display = "block"
    // windImg.style.display = "block"

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&units=metric`
    const getLagos = () => {
        fetch(url).then(response =>{
            return response.json()  //returning the response is important
        }).then(data => {
            console.log(data);
            let temp = document.querySelector(".temp")
            temp.innerHTML = Number.parseInt(data.main.temp) + "<sup>o</sup>" + "c"

            let cityName = document.querySelector(".cityname")
            cityName.innerHTML = `${data.name}<sup>${data.sys.country}</sup>`

            let description = document.querySelector(".description")
            description.textContent = data.weather[0].description.toUpperCase()

            humidityImg.style.display = "block"
            windImg.style.display = "block"

            let humidity = document.querySelector(".humidity2")
            humidity.textContent = data.main.humidity

            let wind = document.querySelector(".windFig")
            wind.textContent = data.wind.deg

            let weatherImg = document.querySelector(".weatherImg")
            weatherImg.src = `./icons/${data.weather[0].main.toLowerCase()}.png`
           }) 
    }
    getLagos()
})





// POSTING API

// let send = () => {
//     fetch(url,{
//         method: "POST",
//         headers: {"Content-type": "application/json"}, //the header is used to tell Js the file-type i.e Json
//         body: JSON.stringify( //you must stringify the JSON if sending to an external source
//             {
//                 user1: "Rahmat"
//             }
//         )
//     }).then(response => {
//         return response.json() //returning the response is important
//     }).then(data => {
//         console.log(data)
//     })
// }
