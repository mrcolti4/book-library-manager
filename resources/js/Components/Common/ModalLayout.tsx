import { useModalContext } from "@/hooks/useModalContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "motion/react";
import { MouseEvent, ReactNode, useEffect } from "react";

type Props = {
    children: ReactNode;
    className?: string;
};
export default function ModalLayout({ children, className }: Props) {
    const { setModal } = useModalContext();

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
        <motion.div
            id="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-black/70"
            onClick={handleCloseOnBackdrop}
        >
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className={
                    "text-center flex flex-col items-center justify-center bg-dark-900 w-[500px] h-[480px] relative z-20 " +
                    className
                }
            >
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
                {children}
            </motion.div>
        </motion.div>
    );
}
