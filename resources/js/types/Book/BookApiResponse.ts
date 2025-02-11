import { BookType } from "./Book";

export type BookApiResponse = {
    books: Array<BookType>;
    nextCursor: string | null;
    hasMore: boolean;
};
