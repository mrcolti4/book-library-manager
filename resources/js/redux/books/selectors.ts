import { State } from "../types";

export const selectBooks = (state: State) => state.bookReducer.books;

export const selectNextCursor = (state: State) => state.bookReducer.nextCursor;

export const selectPrevCursor = (state: State) => state.bookReducer.prevCursor;
