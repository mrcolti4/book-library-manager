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
    nextPageUrl,
    prevPageUrl,
}: {
    books: BookType[];
    nextPageUrl: string;
    prevPageUrl: string | null;
}) {
    const perPage = usePerPage();
    console.log(books);

    const loadBooks = (link: string) => {
        router.visit(link, {
            preserveState: true,
            preserveScroll: true,
            only: ["books"],
        });
    };

    const handlePrevButton = async () => {
        if (!prevPageUrl) return;
        loadBooks(prevPageUrl);
    };

    const handleNextButton = async () => {
        loadBooks(nextPageUrl);
    };

    return (
        <>
            <div className="flex items-center justify-between mb-6">
                <Title>Recommended</Title>
                <div className="flex items-center justify-center gap-2">
                    <PaginationButton
                        onClick={handlePrevButton}
                        disabled={false}
                    >
                        <Icon
                            icon="material-symbols:chevron-left-rounded"
                            width="30"
                            height="30"
                            color={prevPageUrl !== null ? "white" : "gray"}
                        />
                    </PaginationButton>
                    <PaginationButton
                        onClick={handleNextButton}
                        disabled={false}
                    >
                        <Icon
                            icon="material-symbols:chevron-right-rounded"
                            width="30"
                            height="30"
                            color={nextPageUrl !== null ? "white" : "gray"}
                        />
                    </PaginationButton>
                </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-1 gap-5 md:grid-cols-4 xl:grid-cols-5 xl:grid-rows-2">
                <AnimatePresence mode="wait">
                    {books.map((book) => (
                        <Book key={book.id} book={book} />
                    ))}
                </AnimatePresence>
            </div>
        </>
    );
}
