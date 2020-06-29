import axios from "axios";
const url = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = process.env.REACT_APP_API_KEY;


export const fetchWeather = async(query) =>{
    try {
        const {data:{weather, sys:{country}, main:{temp}}}  = await axios.get(url, 
            {
            params: {
                q: query,
                units: 'metric',
                APPID: API_KEY,
            }
        }
        );
        const modifiedData = {
            weather,
            country,
            temp
        }
        console.log(modifiedData);
       return modifiedData;
    } catch (error) {
        return {};
    }
} 
