import { motion } from "motion/react";
import { BookType } from "@/types/Book/Book";
import { useModalContext } from "@/hooks/useModalContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import { MouseEvent, useEffect } from "react";
import OutlineButton from "../OutlineButton";
import { AuthenticateUserData } from "@/types";
import { router, usePage } from "@inertiajs/react";
import ModalLayout from "../Common/ModalLayout";

type props = {
    book: BookType;
};

export default function BookModal({ book }: props) {
    const { setModal, data } = useModalContext();
    const user: AuthenticateUserData = usePage().props?.auth?.user;

    const bookInLibrary = data.find((library) => library.book_id === book.id);

    const handleAddBookToLibrary = () => {
        if (bookInLibrary) return;

        router.post(
            "/library/add",
            {
                user_id: user.id,
                book_id: book.id,
            },
            {
                onSuccess: () => {
                    setModal(null);
                },
            }
        );
    };

    const handleClose = () => {
        setModal(null);
    };

    const handleCloseOnBackdrop = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setModal(null);
        }
    };

    useEffect(() => {
        const handleEscClose = (e: globalThis.KeyboardEvent) => {
            if (e.key === "Escape") {
                setModal(null);
            }
        };

        document.addEventListener("keydown", handleEscClose);
        return () => document.removeEventListener("keydown", handleEscClose);
    }, []);

    return (
        <ModalLayout className="h-[500px] w-[480px]">
            <button
                type="button"
                onClick={handleClose}
                className="absolute transition top-3 right-3 pointer hover:text-white"
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
            <h3 className="font-bold text-white">{book.title}</h3>
            <h4 className="text-sm">{book.author}</h4>
            {!bookInLibrary ? (
                <OutlineButton
                    className="text-sm py-3 px-[29px] md:px-7 rounded-[30px] md:py-4 md:leading-[18px] max-sm:justify-center mt-4"
                    disabled={false}
                    onClick={handleAddBookToLibrary}
                >
                    Add to library
                </OutlineButton>
            ) : (
                <p className="pt-4 text-dark-700">
                    Book already in your library
                </p>
            )}
        </ModalLayout>
    );
}
