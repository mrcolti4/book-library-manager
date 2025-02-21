import { AnimatePresence } from "motion/react";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react/dist/iconify.js";

import Book from "./Book";
import Title from "../Title";
import PaginationButton from "./PaginationButton";

import { getBooksByCursor } from "@/redux/books/actions";
import { useAppDispatch } from "@/redux/store";
import {
    selectBooks,
    selectNextCursor,
    selectPrevCursor,
} from "@/redux/books/selectors";
import usePerPage from "@/hooks/usePerPage";

export default function PaginationSection() {
    const dispatch = useAppDispatch();
    const perPage = usePerPage();

    const prevCursor = useSelector(selectPrevCursor);
    const nextCursor = useSelector(selectNextCursor);
    const books = useSelector(selectBooks);

    const handlePrevButton = () => {
        if (null === prevCursor) return;
        dispatch(getBooksByCursor({ cursor: prevCursor, perPage }));
    };

    const handleNextButton = async () => {
        if (null === nextCursor) return;
        dispatch(getBooksByCursor({ cursor: nextCursor, perPage }));
    };

    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <Title>Recommended</Title>
                <div className="flex gap-2 items-center justify-center">
                    <PaginationButton
                        onClick={handlePrevButton}
                        disabled={prevCursor === null}
                    >
                        <Icon
                            icon="material-symbols:chevron-left-rounded"
                            width="30"
                            height="30"
                            color={prevCursor !== null ? "white" : "gray"}
                        />
                    </PaginationButton>
                    <PaginationButton
                        onClick={handleNextButton}
                        disabled={nextCursor === null}
                    >
                        <Icon
                            icon="material-symbols:chevron-right-rounded"
                            width="30"
                            height="30"
                            color={nextCursor !== null ? "white" : "gray"}
                        />
                    </PaginationButton>
                </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-1 md:grid-cols-4 xl:grid-cols-5 xl:grid-rows-2 gap-5">
                <AnimatePresence mode="wait">
                    {books.map((book) => (
                        <Book key={book.id} book={book} />
                    ))}
                </AnimatePresence>
            </div>
        </>
    );
}
