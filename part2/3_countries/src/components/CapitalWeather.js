import { useEffect, useState } from "react";
import axios from "axios";

export function CapitalWeather({country}) {
    const [weather, setWeather] = useState(null);
    const apiKey = process.env.REACT_APP_API_KEY;
    const capitalLat = country.capitalInfo.latlng[0];
    const capitalLong = country.capitalInfo.latlng[1];

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${capitalLat}&lon=${capitalLong}&units=metric&appid=${apiKey}`)
            .then(response => {
                setWeather(response.data);
            });
    }, [capitalLat, capitalLong, apiKey]);

    function getWeatherDetails() {
        if (!weather) {
            return <p>Fetching weather data...</p>;
        }

        return (
            <>
                <h3>Weather in {country.capital[0]}</h3>
                <p>temperature {weather.main.temp} Celcius</p>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
                <p>wind {weather.wind.speed} m/s</p>
            </>
        );
    }

    return getWeatherDetails();
}
