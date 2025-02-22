import { motion } from "motion/react";
import { BookType } from "@/types/Book/Book";
import { useModalContext } from "@/hooks/useModalContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect } from "react";

type props = {
    book: BookType;
};

export default function BookModal({ book }: props) {
    const { setCurrentBook } = useModalContext();
    const handleClose = () => {
        setCurrentBook(null);
    };

    useEffect(() => {
        const handleEscClose = (e: globalThis.KeyboardEvent) => {
            if (e.key === "Escape") {
                setCurrentBook(null);
            }
        };

        document.addEventListener("keydown", handleEscClose);
        return () => document.removeEventListener("keydown", handleEscClose);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-black/70 w-full h-full fixed top-0 left-0 flex items-center justify-center"
        >
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="text-center flex flex-col items-center justify-center bg-dark-900 w-[500px] h-[480px] relative"
            >
                <button
                    type="button"
                    onClick={handleClose}
                    className="absolute top-3 right-3"
                >
                    <Icon
                        icon="material-symbols:close-rounded"
                        width="30"
                        height="30"
                    />
                </button>
                <img
                    src={book.poster}
                    alt={book.title}
                    className="w-[137px] h-[208px] rounded-md"
                />
                <h3 className="text-white font-bold">{book.title}</h3>
                <h4 className="text-sm">{book.author}</h4>
            </motion.div>
        </motion.div>
    );
}
