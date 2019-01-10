// Init storage
const storage = new Storage();
//Get stored location data
const weatherLocation = storage. getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
//Init UI
const ui = new UI;


//Get weather  on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

//Change Location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city =document.getElementById('city').value;
    const country =document.getElementById('country').value;

    //change location
    weather.changeLocation(city, country);

    //Set location in Ls
    storage.setLocationData(city,country);

    //Get  and display weather
    getWeather();

    //CLose model
    $('#locModal').modal('hide');
});

function getWeather(){
    weather.getweather()
    .then(data => {
        ui.paint(data);
    })
    .catch(error => console.log(error));
}

