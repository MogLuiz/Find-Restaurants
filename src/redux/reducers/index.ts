// Combine Reducers
import { combineReducers } from "redux"

// Reducers
import restaurants from "../modules/restaurants";

export default combineReducers({
    restaurants,
})