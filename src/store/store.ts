// CreateStore
import { createStore } from "redux"

// CombineReducers
import rootReducer from "./modules/rootReducer"

const store = createStore(rootReducer);

export default store;