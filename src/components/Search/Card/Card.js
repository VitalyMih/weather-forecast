import React from "react";
import classes from "./Card.module.scss";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentWeatherById, hideCard, hideForecastCard} from "../../../redux/actions";
import {useEffect} from "react";
import {getCelsius} from "../../../functions/getCelsius";

export const Card = ({city, searchButtonClass}) => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.app.loadingInCard);
    const alert = useSelector(state => state.app.alert);

    useEffect(() => {
        document.addEventListener('click', (event) => {
            if (event.target.className === searchButtonClass) {
                return;
            }
            dispatch(hideCard());
        })
    })

    const onClickHandler = () => {
        dispatch(hideCard());
        dispatch(getCurrentWeatherById(city.id));
        dispatch(hideForecastCard());
    };

    if (loading) {
        return (
            <div className={classes.loading}><span>Загрузка...</span></div>
        )
    }

    return (
        <React.Fragment>
        { alert
          ? null
          : <Link
                to={`/city/${city.id}`}
                className={classes.Card}
                onClick={onClickHandler}
            >
                <div className={classes.name}>{city.name}, {city.sys.country}</div>
                <div className={classes.degrees}>{getCelsius(city.main.temp)}</div>
                <div className={classes.icon}>
                    <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt={city.name}/>
                </div>
                <div className={classes.coordinates}>{city.coord.lat.toFixed(3)}, {city.coord.lon.toFixed(3)}</div>
            </Link>
        }
        </React.Fragment>
    )
}