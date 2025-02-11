import { InitialState } from "./types";

export const handlePending = (state: InitialState, { payload }) => {
    state.isLoading = true;
    state.errors = [];
};

export const handleRejected = (state: InitialState, { error, payload }) => {
    state.isLoading = false;
    state.errors = payload ?? error.message;
};

export const handleFulfilled = (state: InitialState, { payload }) => {
    state.isLoading = false;
};
