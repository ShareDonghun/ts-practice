import { combineReducers, createStore } from "redux";
import todoReducer from "../modules/todoReducer";

const rootReducer = combineReducers({
  todoReducer,
});

const store = createStore(rootReducer);

export default store;

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
