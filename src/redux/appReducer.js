import {HIDE_ALERT, SET_LOADING_IN_CARD, SET_LOADING_IN_MAIN, SHOW_ALERT} from "./types";

const initialState = {
    loadingInCard: false,
    loadingInMain: false,
    alert: null
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING_IN_CARD: return {...state, loadingInCard: action.payload};
        case SET_LOADING_IN_MAIN: return {...state, loadingInMain: action.payload};
        case SHOW_ALERT: return {...state, alert: action.payload};
        case HIDE_ALERT: return {...state, alert: null};
        default: return state;
    }
}