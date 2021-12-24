// Types
import { ActionTypes } from "./types"
import { Reducer } from "redux"

const INITIAL_STATE = {
    restaurants: [],
    restaurantSelected: null,
}

const restaurants: Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.SET_RESTAURANTS: 
            break;

        case ActionTypes.SET_SELECTED_RESTAURANT:
            break;

        default:
            break;
        
    }
}

export default restaurants;
