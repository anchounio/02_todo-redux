import { createStore } from "redux";
import { counterReducer } from "./counter/counter-reducer";
import { tasksReducer } from "./tasks/tasks-reducers";

// const [state, dispatch] = useReducer(myReducere)

export const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const tasksStore = createStore(
  tasksReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
