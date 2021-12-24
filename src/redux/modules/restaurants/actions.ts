// Types
import { ActionTypes } from "./types"

export const setRestaurants = (restaurants: any) => {
    return {
        type: ActionTypes.SET_RESTAURANTS,
        payload: restaurants,
    }
}