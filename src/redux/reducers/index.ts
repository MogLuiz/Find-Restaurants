// Combine Reducers
import { combineReducers } from "redux"

// Reducers
import restaurants from "../modules/restaurants/reducer";

export default combineReducers({
    restaurants,
})