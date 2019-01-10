class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure');
        this.coord = document.getElementById('w-coord');
        this.wind = document.getElementById('w-wind');
    }
    paint(weather){
        console.log(weather);
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `${weather.main.temp} °C`;
        let icon = weather.weather[0].icon;
        this.icon.setAttribute('src',`http://openweathermap.org/img/w/${icon}.png
        `)
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`
        this.wind.textContent = `Wind: ${weather.wind.speed} mps`
        this.coord.textContent = `Longitude: ${weather.coord.lon}° and Latitude:${weather.coord.lat}°`
        
    }
}