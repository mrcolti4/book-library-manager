import { createSlice } from "@reduxjs/toolkit";
import { State } from "./types";
import { getAllBooks } from "./actions";

const initialState: State = {
    books: [],
    nextCursor: "",
    hasMore: false,
};

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllBooks.fulfilled, (state, action) => {
            state.books = action.payload?.books;
            state.nextCursor = action.payload?.nextCursor;
            state.hasMore = action.payload?.hasMore;
        });
    },
});

export const bookReducer = booksSlice.reducer;
