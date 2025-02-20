import { createSlice } from "@reduxjs/toolkit";
import { BookInitialState } from "./types";
import { getAllBooks } from "./actions";
import { PayloadAction } from "@reduxjs/toolkit";
import { BookType } from "@/types/Book/Book";

const initialState: BookInitialState = {
    books: [],
    nextCursor: "",
    hasMore: false,
} satisfies BookInitialState as BookInitialState;

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setNextCursor: (
            state: BookInitialState,
            action: PayloadAction<string>,
        ) => {
            state.nextCursor = action.payload;
        },
        setBooks: (
            state: BookInitialState,
            action: PayloadAction<Array<BookType>>,
        ) => {
            state.books.push(...action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllBooks.fulfilled, (state, action) => {
            if (action.payload?.books) {
                state.books.push(...action.payload.books);
            }
            state.nextCursor = action.payload?.nextCursor;
            state.hasMore = action.payload?.hasMore;
        });
    },
});

export const { setNextCursor, setBooks } = booksSlice.actions;
export const bookReducer = booksSlice.reducer;
