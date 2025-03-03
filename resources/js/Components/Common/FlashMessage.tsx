import { ReactNode, useEffect } from "react";
import { motion } from "motion/react";

export default function FlashMessage({
    children,
    setMessage,
    className,
}: {
    children: ReactNode;
    setMessage: (message: string | null) => void;
    className: string;
}) {
    useEffect(() => {
        const timer = setTimeout(() => {
            setMessage("");
        }, 3000);

        return () => clearTimeout(timer);
    }, [setMessage]);
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{
                duration: 0.3,
            }}
            className={
                "absolute inline-flex p-4 text-lg font-semibold text-white rounded-lg bottom-4 left-4 " +
                className
            }
        >
            {children}
        </motion.div>
    );
}
