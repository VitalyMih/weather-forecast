import classes from "./ForecastItem.module.scss";
import arrow_down_icon from '../../../icons/arrow_down.png';
import {useDispatch} from "react-redux";
import {showForecastCard} from "../../../redux/actions";
import {getShortDate} from "../../../functions/getDate";
import {getCelsius} from "../../../functions/getCelsius";

export const ForecastItem = ({day}) => {
    const dispatch = useDispatch();

    return (
        <div
            onClick={() => dispatch(showForecastCard(day))}
            className={classes.ForecastItem}>
            <div className={classes.day}>{getShortDate(day.dt)}</div>
            <div className={classes.content}>
                <div className={classes.icons}>
                    <div className={classes.icon}>
                        <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="icon" />
                    </div>
                    <div className={classes.degrees}>{getCelsius(day.temp.max)} / {getCelsius(day.temp.min)}</div>
                </div>
                <div className={classes.description}>{day.weather[0].description}</div>
                <div className={classes.arrow}>
                    <img src={arrow_down_icon} alt="arrow_down" />
                </div>
            </div>
        </div>
    )
}