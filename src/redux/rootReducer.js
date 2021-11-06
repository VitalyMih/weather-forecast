import {combineReducers} from "redux";
import {currentWeatherReducer} from "./currentWeatherReducer";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
    current: currentWeatherReducer, app: appReducer
});