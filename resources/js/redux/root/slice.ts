import { createSlice } from "@reduxjs/toolkit";
import { RootInitialState } from "./types";
import { handleFulfilled, handlePending, handleRejected } from "./handlers";

const initialState: RootInitialState = {
    isLoading: false,
    errors: [],
} satisfies RootInitialState as RootInitialState;

const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(
                (action) => action.type.endsWith("/pending"),
                handlePending,
            )
            .addMatcher(
                (action) => action.type.endsWith("/fulfilled"),
                handleFulfilled,
            )
            .addMatcher(
                (action) => action.type.endsWith("/rejected"),
                handleRejected,
            );
    },
});

export const rootReducer = rootSlice.reducer;
