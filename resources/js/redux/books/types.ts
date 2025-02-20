import { BookType } from "@/types/Book/Book";

export interface BookInitialState {
    books: BookType[];
    nextCursor: string | null | undefined;
    hasMore: boolean | undefined;
}
