// CreateStore
import { createStore } from "redux"

// CombineReducers
import rootReducer from "./modules/rootReducer"

// Types
import { IRestaurantState } from "./modules/restaurants/types";
export interface IStoreState {
    restaurants: IRestaurantState;
}

const store = createStore(rootReducer);

export default store;