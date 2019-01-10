class Weather {

    constructor(city,country){
        this.API_KEY = "87846e91c4a4ac72ff58ba1782d357d9";
        this.city = city;
        this.country = country;
    }

    // Fetch weather from API
     async getweather(){
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.API_KEY}&units=metric`);
            const data = await response.json()
            return data;
    }

    //Change weather Location
    changeLocation(city, country){
        this.city = city;
        this.country = country;
    }
}

