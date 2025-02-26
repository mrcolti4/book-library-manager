import { BookType } from "../Book/Book";

export interface Library {
    id: number;
    book_id: number;
    user_id: number;
    created_at: string;
}

export interface BookInLibrary extends Library {
    book: BookType;
}