import { motion } from "motion/react";

type props = {
    bookPages: number;
    readPages: number;
};

export default function StatisticBlock({ bookPages, readPages }: props) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex items-center gap-2"
        >
            <p>
                Each page, each chapter is a new round of knowledge, a new step
                towards understanding. By rewriting statistics, we create our
                own reading history.
            </p>
        </motion.div>
    );
}
