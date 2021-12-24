// CreateStore
import { createStore } from "redux"

// CombineReducers
import rootReducer from "./reducers"

const store = createStore(rootReducer);

export default store;