import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import style from "./WeatherCard.module.css";
import  wallpaper from  "../../images/notfound.svg";
const WeatherCard = ({ weatherData }) => {
    return (
        <div className={style.container}>
            <Grid container justify="center">
                <Grid item component={Card} className={style.card}>
                    <CardContent className={style.content}>
                        {(Object.keys(weatherData).length >= 1) ?
                            <div className={style.contain}>
                                <div className={style.left}>
                                    {<Typography variant='h6' color="primary">{weatherData.country}</Typography>}
                                    <img className={style.cityIcon} src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].description} />
                                    <Typography variant='body1' color="textSecondary">{weatherData.weather[0].description}</Typography>
                                </div>
                                <div className={style.right}>
                                    <Typography variant='h3' color="primary" gutterBottom>{weatherData.temp}
                                    <sup>&deg;<h6 style={{display: "contents"}}>C</h6></sup>
                                    </Typography>
                                    <Typography variant='h5' color="textSecondary">{weatherData.weather[0].main}</Typography>
                                    <Typography variant='body1' color="textSecondary">{new Date().toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</Typography>
                                </div>
                            </div>
                            :
                            <div> <img src={wallpaper} alt="Wallpaper"/></div>
                        }
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default WeatherCard; 