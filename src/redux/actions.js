import axios from "axios";
import {
    GET_CURRENT_WEATHER_BY_ID,
    GET_CURRENT_WEATHER_BY_NAME, GET_FORECAST, HIDE_ALERT,
    HIDE_CARD, HIDE_FORECAST_CARD,
    SET_LOADING_IN_CARD, SET_LOADING_IN_MAIN, SHOW_ALERT,
    SHOW_CARD, SHOW_FORECAST_CARD
} from "./types";

const API_KEY = "bf7fc52e9e488969f2dfcf1a381faae5";

export function getCurrentWeatherByName(city) {
    return async dispatch => {
        dispatch(setLoadingInCard(true));

        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then(response => {
                dispatch({
                    type: GET_CURRENT_WEATHER_BY_NAME,
                    payload: response.data
                })

                dispatch(setLoadingInCard(false));
                dispatch(showCard());
            }).catch(error => {
                dispatch(setLoadingInCard(false));

                dispatch(showAlert('Неверное название города. Повторите запрос!'))
            })
    }
}

export function getCurrentWeatherById(id) {
    return async dispatch => {
        dispatch(setLoadingInMain(true));

        await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}`)
            .then(response => {
                dispatch({
                    type: GET_CURRENT_WEATHER_BY_ID,
                    payload: response.data
                })

                dispatch(getForecast(response.data.coord.lat, response.data.coord.lon));

                dispatch(setLoadingInMain(false));
            }).catch(error => {
                dispatch(setLoadingInMain(false));
                dispatch(showAlert('Что-то пошло не так... Повторите запрос!'))
            })
    }
}

export function getForecast(lat, lon) {
    return async dispatch => {

        await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${API_KEY}`)
            .then(response => {
                dispatch({
                    type: GET_FORECAST,
                    payload: response.data.daily
                })
            }).catch(error => {
                dispatch(showAlert('Прогноз по дням недоступен. Повторите запрос!'))
            })
    }
}

export function showForecastCard(day) {
    return {
        type: SHOW_FORECAST_CARD,
        payload: day
    }
}

export function hideForecastCard() {
    return {
        type: HIDE_FORECAST_CARD
    }
}

export function showCard() {
    return {
        type: SHOW_CARD
    }
}

export function hideCard() {
    return {
        type: HIDE_CARD
    }
}

export function setLoadingInCard(loading) {
    return {
        type: SET_LOADING_IN_CARD,
        payload: loading
    }
}

export function setLoadingInMain(loading) {
    return {
        type: SET_LOADING_IN_MAIN,
        payload: loading,
    }
}

export function showAlert(text) {
    return {
        type: SHOW_ALERT,
        payload: text
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}