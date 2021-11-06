import classes from './ForecastCard.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {hideForecastCard} from "../../../redux/actions";
import arrow_up_icon from '../../../icons/arrow_up.png';
import rain_icon from "../../../icons/rain.png";
import snow_icon from "../../../icons/snow.png";
import wind_icon from "../../../icons/wind.png";
import pressure_icon from "../../../icons/pressure.png";
import {getTime, getShortDate} from "../../../functions/getDate";
import {getCelsius} from "../../../functions/getCelsius";

export const ForecastCard = () => {
    const day = useSelector(state => state.current.forecastCard);
    const dispatch = useDispatch();

    return (
        <div className={classes.ForecastCard}>
            <div
                onClick={() => dispatch(hideForecastCard())}
                className={classes.card}>
                <div className={classes.date}>{getShortDate(day.dt)}</div>
                <div className={classes.button}>
                    <img className={classes.button_icon} src={arrow_up_icon} alt="close-button" />
                </div>
            </div>
            <div className={classes.top}>
                <div className={classes.icon}>
                    <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="icon" />
                </div>
                <div className={classes.content}>
                    <div className={classes.description}>{day.weather[0].description[0].toUpperCase() + day.weather[0].description.slice(1)}.</div>
                    <div className={classes.text}>The high will be {getCelsius(day.temp.max)}, the low will be {getCelsius(day.temp.min)}.</div>
                </div>
            </div>
            <div className={classes.main}>
                <div className={classes.rain}>
                    <img src={rain_icon} alt="wind"/>
                    <div>{day.rain ? day.rain : 0}mm</div>
                </div>
                <div className={classes.snow}>
                    <img src={snow_icon} alt="wind"/>
                    <div>{day.snow ? day.snow : 0}mm</div>
                </div>
                {day.wind_speed && <div className={classes.wind}>
                    <img src={wind_icon} alt="wind"/>
                    <div>{day.wind_speed}m/s</div>
                </div>
                }
                {day.pressure && <div className={classes.pressure}>
                    <img src={pressure_icon} alt="wind"/>
                    <div>{day.pressure}hPa</div>
                </div>
                }
                {day.humidity && <div className={classes.humidity}>Humidity: {day.humidity}%</div>}
                {day.dew_point && <div className={classes.clouds}>Dew point: {getCelsius(day.dew_point)}</div>}
            </div>
            <div className={classes.forecast_table}>
                <table className={classes.table}>
                    <tbody>
                        <tr className={classes.row}>
                            <td className={classes.column}></td>
                            <td className={classes.column}>Morning</td>
                            <td className={classes.column}>Afternoon</td>
                            <td className={classes.column}>Evening</td>
                            <td className={classes.column}>Night</td>
                        </tr>
                        <tr className={classes.row}>
                            <td className={classes.column}>Temperature</td>
                            <td className={classes.column}>{getCelsius(day.temp.morn)}</td>
                            <td className={classes.column}>{getCelsius(day.temp.day)}</td>
                            <td className={classes.column}>{getCelsius(day.temp.eve)}</td>
                            <td className={classes.column}>{getCelsius(day.temp.night)}</td>
                        </tr>
                        <tr className={classes.row}>
                            <td className={classes.column}>Feels like</td>
                            <td className={classes.column}>{getCelsius(day.feels_like.morn)}</td>
                            <td className={classes.column}>{getCelsius(day.feels_like.day)}</td>
                            <td className={classes.column}>{getCelsius(day.feels_like.eve)}</td>
                            <td className={classes.column}>{getCelsius(day.feels_like.night)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={classes.bottom}>
                <div className={classes.sunrise}>
                    <div className={classes.sunrise_title}>sunrise</div>
                    <div className={classes.sunrise_time}>{getTime(day.sunrise)}</div>
                </div>
                <div className={classes.sunset}>
                    <div className={classes.sunset_title}>sunset</div>
                    <div className={classes.sunset_time}>{getTime(day.sunset)}</div>
                </div>
            </div>

        </div>
    )
}