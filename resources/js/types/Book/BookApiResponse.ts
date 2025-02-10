import { BookType } from "./Book";

export type BookApiResponse = {
    books: Array<BookType>;
    next_cursor: string | null;
    has_more: boolean;
};
