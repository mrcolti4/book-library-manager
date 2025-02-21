import { BookType } from "@/types/Book/Book";

export interface BookInitialState {
    books: BookType[];
    nextCursor: string | null;
    prevCursor: string | null;
    hasMore: boolean | undefined;
}

export type getBooksByCursorRequest = {
    cursor: string | null;
    perPage: number;
};
