import { motion } from "motion/react";
import InputField from "../Auth/InputField";
import OutlineButton from "../OutlineButton";
import Title from "../Title";
import { StopRecordSectionProps } from "@/types/Library/StartRecord";

export function StopReadingSection({
    id,
    records,
    data,
    setData,
    processing,
    onClick,
}: StopRecordSectionProps) {
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
                    className="text-sm py-3 px-[29px] md:px-7 rounded-[30px] md:py-4 md:leading-[18px] max-sm:justify-center mt-4 w-[120px] capitalize"
                    disabled={processing}
                    onClick={onClick}
                >
                    To stop
                </OutlineButton>
            </motion.form>
            <Title>Diary</Title>
            <div>
                {records.length > 0 ? (
                    records.map((record) => (
                        <div key={record.id}>
                            <p className="text-sm text-white">Date: </p>
                            <p className="text-sm text-white">Page: </p>
                        </div>
                    ))
                ) : (
                    <p className="text-sm text-white">No records</p>
                )}
            </div>
        </>
    );
}
