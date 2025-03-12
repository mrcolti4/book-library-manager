import { motion } from "motion/react";
import { Record } from "@/types/Library/Record";
import DiaryItem from "./DiaryItem";

type props = {
    records: Record[];
    pages: number;
};

export default function DiaryBlock({ records, pages }: props) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full p-5 space-y-4 bg-dark-800 rounded-xl"
        >
            {records.length > 0 ? (
                records.map((record) => (
                    <DiaryItem
                        key={record.id}
                        record={record}
                        activeId={records[0].id}
                        bookPagesCount={pages}
                    />
                ))
            ) : (
                <p className="text-sm text-white">No records</p>
            )}
        </motion.div>
    );
}
