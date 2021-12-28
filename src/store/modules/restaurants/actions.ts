// Types
import { ActionTypes, IEstablishmentsSearched } from "./types"

export const setRestaurants = (restaurants: IEstablishmentsSearched[]) => {
    return {
        type: ActionTypes.SET_RESTAURANTS,
        payload: restaurants,
    }
}

export const setSelectedRestaurant = (selectedRestaurant: IEstablishmentsSearched) => {
    return {
        type: ActionTypes.SET_SELECTED_RESTAURANT,
        payload: selectedRestaurant,
    }
}