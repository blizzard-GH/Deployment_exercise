<template>
    <div class="container">
        <div class="header">
            <h1>WEATHER APP</h1>
            <form @submit.prevent="SearchByCity" class="search-bar">
                <label for="searchByCity" class="visually-hidden">Enter city name</label>
                <input type="text" v-model="city" id="searchByCity" placeholder="Enter city name" class="search-input">
                <button type="submit" class="search-button">Search by City</button>
            </form>
            <button @click="fetchCurrentLocationWeather" class="search-button">Use My Location</button>
        </div>
    </div>
    <main>
        <div v-if="usedLocation">
            <p>
                Weather based on your location:
            </p>
        </div>
        <div v-if="usedCity">
            <p>
                Weather based on city you searched:
            </p>
        </div>
        <div v-if="weatherData">
            <h2>
                {{ weatherData.name }}, {{ weatherData.sys.country }}
            </h2>
            <div>
                <img :src="iconUrl" alt="WeatherIcon">
                <p> {{ temperature }} degree celcius</p>
            </div>
            <span>{{ weatherData.weather[0].description }}</span>
        </div>
    </main>
</template>

<script>
import axios from 'axios'

const apikey="d69fb5e47fe65be6506187cce96b2e18"

export default{
    name: "App",
    data() {
        return{
            city:"",
            weatherData: null,
            hourlyForecast: [],
            dailyForecast: [],
            usedLocation: null,
            usedCity: null
        }
    },
    computed:{
        temperature(){
            return this.weatherData
            ? Math.floor(this.weatherData.main.temp - 273) : null
        },
        iconUrl() {
            return this.weatherData
            ? `http://api.openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png` : null
        }
    },
    mounted(){
        // this.fetchCurrentLocationWeather()
    },
    methods:{
        async fetchCurrentLocationWeather(){
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(async (position) => {
                    this.usedCity = false
                    this.usedLocation = true
                    const { latitude, longitude} = position.coords
                    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`
                    await this.fetchWeatherData(url)
                })
            }
        },
        async fetchWeatherData(url){
            try{
                const response = await axios.get(url)
                this.weatherData = response.data
            }
            catch (error){
                console.error("Error fetching weather data.", error)
            }
        },
        async SearchByCity() {
            const geocodeUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${this.city}&limit=1&appid=${apikey}`
            let lat
            let lon

            try {
                const geoResponse = await axios.get(geocodeUrl)
                lat = geoResponse.data[0].lat
                lon = geoResponse.data[0].lon
            } catch (geoError) {
                console.error('Error fetching geolocation:', geoError)
                this.weatherData = 'Failed to retrieve geolocation.'
            }

            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`

            try {
                const response = await axios.get(weatherUrl)
                this.weatherData = response.data
                this.usedCity = true
                this.usedLocation = false
            } catch (error) {
                console.error('Error fetching weather data:', error)
                this.weatherData = 'Failed to retrieve weather data.'
            }
        }
    }
}

</script>

<style scoped>
.container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background-color: #f4f4f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.header {
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
}

.header h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 10px;
}

.search-bar {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
}

.search-input {
    width: 70%;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    color: #333;
}

.search-button {
    padding: 10px 20px;
    background-color: #007BFF;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;
}

.search-button:hover {
    background-color: #0056b3;
}

main {
    padding: 20px;
    text-align: center;
}

main h2 {
    color: #333;
    font-size: 1.5rem;
}

main img {
    width: 100px; 
    height: auto;
    margin: 10px 0;
}

main p {
    font-size: 1.25rem;
    color: #444;
}

main span {
    display: block;
    margin-top: 5px;
    font-size: 1rem;
    color: #666;
}
</style>