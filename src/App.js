import React, {useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import Footer from "./components/Footer/Footer";
import { fetchWeather } from "./api";
import style from "./App.module.css";
const App = () => {
    const [weatherData, setWeatherData] = useState({});
    const fetchData = async (city) => {
        const data  = await fetchWeather(city);
        setWeatherData(data);
    }
    return (
        <div className={style.roots}>
        <Navbar/>
            <div className={style.main}>
                <Searchbar searcher={fetchData}/>
                <WeatherCard weatherData={weatherData}/>
            </div>
            <Footer/>
        </div>
    )
}

export default App;