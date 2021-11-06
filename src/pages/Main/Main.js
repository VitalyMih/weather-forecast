import React from "react";
import classes from "./Main.module.scss";
import {CityCard} from "../../components/CityCard/CityCard";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCurrentWeatherById} from "../../redux/actions";
import {Loading} from "../../components/Loading/Loading";
import {ForecastList} from "../../components/Forecast/ForecastList/ForecastList";

export const Main = ({match}) => {
    const id = match.params.id;
    const dispatch = useDispatch();
    const loading = useSelector(state => state.app.loadingInMain);
    const city = useSelector(state => state.current.cityById);
    const forecast = useSelector(state => state.current.forecast);

    useEffect(() => {
        dispatch(getCurrentWeatherById(id));
    }, []);

    return (
        <React.Fragment>
            {!city || loading
                ? <div className={classes.loader}><Loading /></div>
                :
                <div className={classes.Main}>
                    <CityCard city={city} />
                    <ForecastList forecast={forecast}/>
                </div>
            }
        </React.Fragment>
    )
}