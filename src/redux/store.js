import { createStore } from "redux";
import { counterReducer } from "./counter/counter-reducer";

// const [state, dispatch] = useReducer(myReducere)

export const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
