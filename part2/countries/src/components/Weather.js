import React, {useState,useEffect} from 'react'
import axios from 'axios'

const Weather = ({capital}) => {

    const [weather, setWeather] = useState([])
    const [temperature, setTemperature] = useState()

    useEffect(() => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER}&query=${capital}`)
            .then(response => {
                setWeather(response)
            })
    },[])
    return (
        <>
            <h3>Weather in {capital}</h3>
            <h2>Temperature: {weather.temperature}</h2>
            <h2>Wind: {weather.wind_speed} direction {weather.wind_dir}</h2>
        </>
    )
}

export default Weather