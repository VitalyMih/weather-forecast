import React from "react";
import classes from "./ForecastList.module.scss";
import {ForecastItem} from "../ForecastItem/ForecastItem";
import {useSelector} from "react-redux";
import {ForecastCard} from "../ForecastCard/ForecastCard";

export const ForecastList = ({forecast}) => {
    const forecastCard = useSelector(state => state.current.forecastCard);

    return (
        <React.Fragment>
            {forecast &&
                <div className={classes.ForecastList}>
                    <div className={classes.title}>8-day forecast</div>
                    {forecastCard
                        ? <ForecastCard />
                        : <div className={classes.list}>
                            {forecast.map((day, index) => <ForecastItem day={day} key={index}/>)}
                          </div>
                    }
                </div>
            }
        </React.Fragment>
    )
}