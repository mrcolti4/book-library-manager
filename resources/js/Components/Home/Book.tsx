import { motion } from "motion/react";

import { BookType } from "@/types/Book/Book";
import { useModalContext } from "@/hooks/useModalContext";
import BookModal from "./BookModal";
import clsx from "clsx";

type props = {
    book: BookType;
    className?: string;
    textLeft?: boolean;
};

export default function Book({ book, className, textLeft = false }: props) {
    const divClasses = clsx(
        "flex flex-col line-clamp-1 justify-center ",
        className,
        textLeft ? "items-start" : "items-center"
    );
    const { setModal } = useModalContext();

    const handleClick = () => {
        setModal(<BookModal book={book} />);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{
                duration: 0.3,
            }}
            className={divClasses}
        >
            <img
                src={book.poster}
                alt={book.title}
                className="w-[137px] h-[208px] rounded-md"
            />
            <button
                onClick={handleClick}
                type="button"
                className="text-xs font-bold text-white line-clamp-1 lg:text-sm"
            >
                {book.title}
            </button>
            <h4 className="text-xs line-clamp-1 lg:text-sm ">{book.author}</h4>
        </motion.div>
    );
}
