// Types
import { ActionTypes } from "./types"

export const setRestaurants = (restaurants: any) => {
    return {
        type: ActionTypes.SET_RESTAURANTS,
        payload: restaurants,
    }
}

export const setSelectedRestaurant = (selectedRestaurant: any) => {
    return {
        type: ActionTypes.SET_SELECTED_RESTAURANT,
        payload: selectedRestaurant,
    }
}