// Types
import { Reducer } from "redux"
import { ActionTypes } from "./types"
import { IRestaurantState } from "./types"

const INITIAL_STATE: IRestaurantState = {
    restaurants: [],
    restaurantSelected: null,
}

const restaurants: Reducer<IRestaurantState> = (state = INITIAL_STATE, action) => {

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
