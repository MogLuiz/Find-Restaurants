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

            return { ...state, restaurants: action.payload }
            
        case ActionTypes.SET_SELECTED_RESTAURANT:

            return { ...state, restaurantSelected: action.payload }

        default:
            return state;
                
    }
}

export default restaurants;
