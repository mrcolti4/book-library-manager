import { BookInitialState } from "./books/types";
import { RootInitialState } from "./root/types";

export interface State {
    bookReducer: BookInitialState;
    rootReducer: RootInitialState;
}
