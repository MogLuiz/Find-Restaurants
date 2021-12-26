// Combine Reducers
import { combineReducers } from "redux"

// Reducers
import restaurants from "./restaurants/reducer";

export default combineReducers({
    restaurants,
})