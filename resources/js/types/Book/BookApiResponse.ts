import { BookType } from "./Book";

export type BookApiResponse = {
    books: Array<BookType>;
    nextCursor: string | null;
    prevCursor: string | null;
    hasMore: boolean;
};
