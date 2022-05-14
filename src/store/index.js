import {
    createStore,
    applyMiddleware,
    compose
} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// object
const initialState = {};

// semua middleware yg di import
const middleware = [thunk];


const store = createStore(
    rootReducer,
    // state ketika di init
    initialState,
    compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
)

export default store;