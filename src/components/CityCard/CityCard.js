import classes from "./CityCard.module.scss";
import wind_icon from '../../icons/wind.png';
import rain_icon from '../../icons/rain.png';
import pressure_icon from '../../icons/pressure.png';
import snow_icon from '../../icons/snow.png';
import {getDate} from "../../functions/getDate";
import {getCelsius} from "../../functions/getCelsius";

export const CityCard = ({city}) => {

    return (
        <div className={classes.CityCard}>
            <div className={classes.date}>{getDate(city.dt)}</div>
            <div className={classes.name}>{city.name}, {city.sys.country}</div>
            <div className={classes.icons}>
                <div className={classes.image}>
                    <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="icon" />
                </div>
                <div className={classes.degrees}>{getCelsius(city.main.temp)}</div>
            </div>
            <div className={classes.weather}>
                {city.main.feels_like && <span>Feels like {getCelsius(city.main.feels_like)}. </span>}
                {city.weather[0].description && <span>{city.weather[0].description[0].toUpperCase() + city.weather[0].description.slice(1)}.</span>}
            </div>
            <div className={classes.content}>
                {city.rain && <div className={classes.rain}>
                                <img src={rain_icon} alt="wind"/>
                                <div>{city.rain["3h"] ? city.rain["3h"] : city.rain["1h"]}mm</div>
                            </div>
                }
                {city.snow && <div className={classes.snow}>
                                <img src={snow_icon} alt="wind"/>
                                <div>{city.snow["3h"] ? city.snow["3h"] : city.snow["1h"]}mm</div>
                            </div>
                }
                {city.wind && <div className={classes.wind}>
                                        <img src={wind_icon} alt="wind"/>
                                        <div>{city.wind.speed}m/s</div>
                                    </div>
                }
                {city.main.pressure && <div className={classes.pressure}>
                                        <img src={pressure_icon} alt="wind"/>
                                        <div>{city.main.pressure}hPa</div>
                                    </div>
                }
                {city.main.humidity && <div className={classes.humidity}>Humidity: {city.main.humidity}%</div>}
                {city.visibility && <div className={classes.visibility}>Visibility: {(city.visibility / 1000).toFixed(1)}km</div>}
                {city.clouds && <div className={classes.clouds}>Cloudiness: {city.clouds.all}%</div>}
            </div>
        </div>
    )
}