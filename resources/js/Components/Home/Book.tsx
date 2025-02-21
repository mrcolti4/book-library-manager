import { motion } from "motion/react";
import { BookType } from "@/types/Book/Book";

type props = {
    book: BookType;
};

export default function Book({ book }: props) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="text-center flex flex-col items-center justify-center"
        >
            <img
                src={book.poster}
                alt={book.title}
                className="w-[137px] h-[208px] rounded-md"
            />
            <h3 className="text-white font-bold">{book.title}</h3>
            <h4 className="text-sm">{book.author}</h4>
        </motion.div>
    );
}
