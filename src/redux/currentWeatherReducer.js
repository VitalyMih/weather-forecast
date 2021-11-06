import {
    GET_CURRENT_WEATHER_BY_ID,
    GET_CURRENT_WEATHER_BY_NAME, GET_FORECAST,
    HIDE_CARD, HIDE_FORECAST_CARD,
    SHOW_CARD, SHOW_FORECAST_CARD
} from "./types";

const initialState = {
    cityByName: null,
    cityById: null,
    forecast: null,
    isCard: false,
    forecastCard: null
}

export const currentWeatherReducer = (state = initialState, action)  => {
    switch (action.type) {
        case GET_CURRENT_WEATHER_BY_NAME: return {...state, cityByName: action.payload};
        case GET_CURRENT_WEATHER_BY_ID: return {...state, cityById: action.payload};
        case GET_FORECAST: return {...state, forecast: action.payload};
        case SHOW_FORECAST_CARD: return {...state, forecastCard: action.payload};
        case HIDE_FORECAST_CARD: return {...state, forecastCard: null};
        case SHOW_CARD: return {...state, isCard: true};
        case HIDE_CARD: return {...state, isCard: false};
        default: return state;
    }
}