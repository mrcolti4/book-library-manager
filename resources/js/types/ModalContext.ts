import { Dispatch, SetStateAction } from "react";
import { BookType } from "./Book/Book";

export default interface ModalContextProps {
    book: BookType | null;
    setCurrentBook: Dispatch<SetStateAction<BookType | null>>;
}
