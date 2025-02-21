import { createSlice } from "@reduxjs/toolkit";
import { BookInitialState } from "./types";
import { getBooksByCursor } from "./actions";

const initialState: BookInitialState = {
    books: [],
    nextCursor: "",
    prevCursor: "",
    hasMore: false,
} satisfies BookInitialState as BookInitialState;

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBooksByCursor.fulfilled, (state, action) => {
            if (action.payload?.books) {
                state.books = action.payload.books;
            }
            state.nextCursor = action.payload?.nextCursor ?? null;
            state.prevCursor = action.payload?.prevCursor ?? null;
            state.hasMore = action.payload?.hasMore;
        });
    },
});

export const bookReducer = booksSlice.reducer;
