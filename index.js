const weatherApi = {
    key: "https://python3-dot-parul-arena-2.uc.r.appspot.com/test?cityname=London?cityname=",
    baseUrl : "https://python3-dot-parul-arena-2.appspot.com/test?cityname=London",
}

const searchInput = document.getElementById('input-box');

searchInputBox.addEventListener('keypress',(event) => {
    if(event.keyCode == 13){
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').getElementsByClassName.display = "block";
    }
})

function getWeatherReport(city){
   fetch('${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric')
 .then(weather=>{
    return weather.json();

 }).then(showWeatherReport);
}

//show wheather report

function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = '${weather.name}, ${weather.sys.country}';

    let temerature  = document.getElementById('temp');
    temerature.innerText = '${Math.round(weather.main.tep)}&deg;C';
}

function dateManage(dateArg){
    let days = ["Sunday", "Monday", "Tuesday", "Wedenesday"];
    let months = ["january", "February", "March"]

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date =  dateArg.getDate();
    let day = days[dateArg.getDay()];

    return '${date} ${month} (${day}), ${year}'; 

}