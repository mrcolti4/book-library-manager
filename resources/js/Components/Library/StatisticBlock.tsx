import { motion } from "motion/react";

type props = {
    bookPages: number;
    readPages: number;
};

export default function StatisticBlock({ bookPages, readPages }: props) {
    const pagesReadPercent = ((readPages / bookPages) * 100).toFixed(2);

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col items-center gap-2"
        >
            <p className="hidden lg:block">
                Each page, each chapter is a new round of knowledge, a new step
                towards understanding. By rewriting statistics, we create our
                own reading history.
            </p>
            <div className="w-full py-5 mt-5 bg-dark-800 rounded-2xl">
                <div
                    className="mx-auto flex items-center justify-center w-[189px] h-[189px] rounded-full"
                    style={{
                        background: `
                        radial-gradient(closest-side, #262626 79%, transparent 80% 100%, #1F1F1F 100%),
                        conic-gradient(#30B94D ${pagesReadPercent}%, #1F1F1F 0%)`,
                    }}
                >
                    <p className="text-xl font-bold text-white">100%</p>
                </div>
                <div className="flex justify-center gap-4 mt-4">
                    <div className="w-[14px] h-[14px] bg-primary rounded-sm" />
                    <div>
                        <p className="font-bold text-white">
                            {pagesReadPercent}%
                        </p>
                        <p>{readPages} pages read</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
