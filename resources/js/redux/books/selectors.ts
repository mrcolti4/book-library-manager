import { State } from "./types";

export const selectBooks = (state: State) => state.books;

export const selectNextCursor = (state: State) => state.nextCursor;
