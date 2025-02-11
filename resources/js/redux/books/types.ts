import { BookType } from "@/types/Book/Book";

export interface State {
    books: Array<BookType> | undefined;
    nextCursor: string | null | undefined;
    hasMore: boolean | undefined;
}
