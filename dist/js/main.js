function actionToggle(){
var action = document.querySelector('.action');
action.classList.toggle('active');
};


//calling the api(old code example)
/* #location, #dayTime, #summary, #currentTemp, #weatherIcon, #precipertation, #percepitation, #humidity, #wind, #findWeather*/


//get todays weather
document.querySelector('.btn').addEventListener('click', currentWeather);





function currentWeather(e){
let request;
let url = 'https://api.weatherbit.io/v2.0/current?city=';
let secondaryUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?city=';
let city = document.querySelector('#city-search').value;
let api = '&key=6cda72d602394dbfab2aa62b55056f78';
let units = '&units=I';
let dailyCast = '&days=7';

let sum = secondaryUrl + city + units + dailyCast + api;

//request weather info
request = new XMLHttpRequest();
request.open("GET", sum, true);

request.onload = function(){
    let info = JSON.parse(this.response);
    let output = '';


    console.log(info);



info.data.forEach(function(data){
    let name = info.city_name;
    let state = info.state_code;
    let temp = data.temp;
    let date = new Date();
    let weekDay = getWeekDay(date);
    let min = data.min_temp;
    let max = data.max_temp;
    console.log(info.city_name);
    
    function getWeekDay(date){
        //Create an array containing each day, starting with Sunday.
        var weekdays = new Array(
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        );
        //Use the getDay() method to get the day.
        var day = date.getDay();
        //Return the element that corresponds to that index.
        return weekdays[day];
    }

//change photo with description
let img = document.getElementById('weather-icon');
let desc = data.weather.description;
function changeImg(desc){
if (desc === 'scattered clouds'|| 'overcast clouds' || 'few clouds') {
    img.src = '../dist/img/CloudyMoon.png';
} else if (desc === ) {
    
}
}



    
    console.log(weekDay);
    console.log(info.data[2].weather.description);
    console.log(info.data[2].valid_date);
    document.querySelector('#min-temp').innerHTML = `${min}&deg;`;
    document.querySelector('#max-temp').innerHTML = `${max}&deg;`;
    document.querySelector('#location').innerHTML = `<p>${name}, ${state} </p>`;
    document.querySelector('#currentTemp').innerHTML = `<div>${temp}&deg;</div>`;
    document.querySelector('#dayTime').innerHTML = `<div>${weekDay}<br> </div>`;
    document.querySelector('#summary').innerHTML = `<div>${data.weather.description}</div>`;
    document.querySelector('#precipitation').innerHTML = `<div>Precipitation ${data.precip}%</div>`;
    document.querySelector('#wind').innerHTML = `<div>Wind ${data.wind_spd} MPH</div>`;
    document.querySelector('#sunrise').innerHTML = `<div>${data.sunrise}</div>`;
    document.querySelector('#sunset').innerHTML = `<div>${data.sunset}</div>`

})
    
}
request.send();
e.preventDefault();

}

