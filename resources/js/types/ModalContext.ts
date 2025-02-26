import { Dispatch, SetStateAction } from "react";
import { BookType } from "./Book/Book";
import { Library } from "./Library/Library";

export default interface ModalContextProps {
    book: BookType | null;
    setCurrentBook: Dispatch<SetStateAction<BookType | null>>;
    userLibrary: Library[];
}
