import { AnimatePresence, motion } from "motion/react";
import InputField from "../Auth/InputField";
import OutlineButton from "../OutlineButton";
import Title from "../Title";
import { StopRecordSectionProps } from "@/types/Library/Record";
import DiaryBlock from "./DiaryBlock";
import { useState } from "react";
import StatisticBlock from "./StatisticBlock";
import { Icon } from "@iconify/react/dist/iconify.js";

type Blocks = "diary" | "statistics";

export function StopReadingSection({
    id,
    records,
    book,
    data,
    setData,
    processing,
    onClick,
}: StopRecordSectionProps) {
    const [activeBlock, setActiveBlock] = useState<Blocks>("diary");

    return (
        <>
            <motion.form
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                    duration: 0.3,
                }}
                className="flex flex-col gap-2 md:w-1/2 lg:w-auto"
            >
                <h3 className="text-sm text-white">Filters: </h3>
                <InputField
                    id={id}
                    type="number"
                    label="Stop page: "
                    data={data}
                    setData={setData}
                />
                <OutlineButton
                    className="py-3 px-[29px] md:px-7 rounded-[30px] md:py-4 md:leading-[18px] max-sm:justify-center mt-4 w-[120px] capitalize"
                    disabled={processing}
                    onClick={onClick}
                >
                    To stop
                </OutlineButton>
            </motion.form>
            <div className="flex flex-col justify-start w-full gap-5 mt-4 lg:w-auto max-lg:gap-3">
                <div className="flex gap-4 lg:gap-2">
                    <Title>
                        {activeBlock === "diary" ? "Diary" : "Statistics"}
                    </Title>
                    <div className="flex items-center gap-4 lg:gap-2">
                        <button
                            onClick={() => setActiveBlock("diary")}
                            className={"text-sm font-bold text-white "}
                        >
                            <Icon
                                icon="material-symbols:hourglass-empty-rounded"
                                fontSize={20}
                                color={
                                    activeBlock === "diary" ? "white" : "gray"
                                }
                            />
                        </button>
                        <button
                            onClick={() => setActiveBlock("statistics")}
                            className={"text-sm font-bold text-white "}
                        >
                            <Icon
                                icon="material-symbols:pie-chart-outline"
                                fontSize={20}
                                color={
                                    activeBlock === "statistics"
                                        ? "white"
                                        : "gray"
                                }
                            />
                        </button>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {activeBlock === "diary" && (
                        <DiaryBlock
                            key="diary"
                            records={records}
                            pages={book.pages}
                        />
                    )}
                    {activeBlock === "statistics" && (
                        <StatisticBlock
                            key="statistics"
                            bookPages={book.pages}
                            readPages={records[0] ? records[0].page_stop : 0}
                        />
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
