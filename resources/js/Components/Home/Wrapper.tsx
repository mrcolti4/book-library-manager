import { ReactNode } from "react";
import { motion } from "motion/react";

interface props {
    children: ReactNode;
    className?: string;
}

export default function Wrapper({ children, className }: props) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{
                duration: 0.3,
            }}
            className={"bg-dark-800 p-5 rounded-xl gap-3 " + className}
        >
            {children}
        </motion.div>
    );
}
