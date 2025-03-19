import { AnimatePresence } from "motion/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { router } from "@inertiajs/react";

import Book from "./Book";
import Title from "../Title";
import PaginationButton from "./PaginationButton";

import usePerPage from "@/hooks/usePerPage";
import { BookType } from "@/types/Book/Book";

export default function PaginationSection({
    books,
    next,
    prev,
}: {
    books: BookType[];
    next: string | null;
    prev: string | null;
}) {
    const perPage = usePerPage();

    const loadBooks = (link: string) => {
        router.visit(link, {
            preserveState: true,
            preserveScroll: true,
            only: ["books"],
        });
    };

    const handlePrevButton = async () => {
        if (!prev) return;
        loadBooks(prev);
    };

    const handleNextButton = async () => {
        if (!next) return;
        loadBooks(next);
    };

    return (
        <>
            <div className="flex items-center justify-between mb-6">
                <Title>Recommended</Title>
                <div className="flex items-center justify-center gap-2">
                    <PaginationButton
                        onClick={handlePrevButton}
                        disabled={prev ? false : true}
                    >
                        <Icon
                            icon="material-symbols:chevron-left-rounded"
                            width="30"
                            height="30"
                            color={prev !== null ? "white" : "gray"}
                        />
                    </PaginationButton>
                    <PaginationButton
                        onClick={handleNextButton}
                        disabled={next ? false : true}
                    >
                        <Icon
                            icon="material-symbols:chevron-right-rounded"
                            width="30"
                            height="30"
                            color={next !== null ? "white" : "gray"}
                        />
                    </PaginationButton>
                </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-1 gap-5 md:grid-cols-4 xl:grid-cols-5 xl:grid-rows-2">
                <AnimatePresence mode="wait">
                    {books.length > 0 ? (
                        books.map((book) => <Book key={book.id} book={book} />)
                    ) : (
                        <p>No books found</p>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
