import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { bookReducer } from "../books/slice";
import { useDispatch } from "react-redux";
import { rootReducer } from "../root/slice";

const reducers = combineReducers({
    rootReducer,
    bookReducer,
});

const store = configureStore({
    reducer: reducers,
    devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export default store;
