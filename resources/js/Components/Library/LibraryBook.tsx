import { motion } from "motion/react";

import { BookType } from "@/types/Book/Book";
import { useModalContext } from "@/hooks/useModalContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import LibraryModal from "./LibraryModal";
import { useForm } from "@inertiajs/react";
import DeleteBookModal from "./DeleteBookModal";

type props = {
    book: BookType;
    id: number;
};

export default function LibraryBook({ book, id }: props) {
    const { setModal } = useModalContext();

    const handleDeleteClick = () => {
        setModal(<DeleteBookModal id={id} />);
    };

    const handleClick = () => {
        setModal(<LibraryModal book={book} libraryId={id} />);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{
                duration: 0.3,
            }}
            className="flex flex-col items-center justify-center text-center"
        >
            <img
                src={book.poster}
                alt={book.title}
                className="w-[137px] h-[208px] rounded-md"
            />
            <div className="flex items-center gap-5 text-left">
                <div>
                    <button
                        onClick={handleClick}
                        type="button"
                        className="font-bold text-white"
                    >
                        {book.title}
                    </button>
                    <h4 className="text-sm">{book.author}</h4>
                </div>
                <button
                    onClick={handleDeleteClick}
                    className="inline-flex items-center justify-center border rounded-full w-7 h-7 bg-semired/10 border-semired/20"
                >
                    <Icon
                        icon="material-symbols:delete"
                        fontSize={18}
                        color="#E85050"
                    />
                </button>
            </div>
        </motion.div>
    );
}
