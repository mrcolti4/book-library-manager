import { motion } from "motion/react";
import { BookType } from "@/types/Book/Book";
import { useModalContext } from "@/hooks/useModalContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import { MouseEvent, useEffect } from "react";
import OutlineButton from "../OutlineButton";
import { AuthenticateUserData } from "@/types";
import { usePage } from "@inertiajs/react";
import ModalLayout from "../Common/ModalLayout";

type props = {
    book: BookType;
};

export default function LibraryModal({ book }: props) {
    const { setModal } = useModalContext();
    const user: AuthenticateUserData = usePage().props?.auth?.user;

    return (
        <ModalLayout>
            <img
                src={book.poster}
                alt={book.title}
                className="w-[137px] h-[208px] rounded-md"
            />
            <h3 className="font-bold text-white">{book.title}</h3>
            <h4 className="text-sm">{book.author}</h4>
            <p className="text-sm text-white">{book.pages}</p>
            <OutlineButton
                className="py-3 mt-4 rounded-3xl px-7"
                disabled={false}
            >
                Start reading
            </OutlineButton>
        </ModalLayout>
    );
}
