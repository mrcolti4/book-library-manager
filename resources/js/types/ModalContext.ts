import { Dispatch, ReactNode, SetStateAction } from "react";
import { BookType } from "./Book/Book";
import { Library } from "./Library/Library";

export default interface ModalContextProps {
    modal: ReactNode | null;
    setModal: Dispatch<SetStateAction<ReactNode | null>>;
    data: Array<any>;
}
