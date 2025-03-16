import { motion } from "motion/react";
import InputField from "../Auth/InputField";
import OutlineButton from "../OutlineButton";
import Title from "../Title";
import { StartRecordSectionsProps } from "@/types/Library/Record";

export function StartReadingSection({
    id,
    data,
    setData,
    processing,
    onClick,
}: StartRecordSectionsProps) {
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
                    label="Start page: "
                    data={data}
                    setData={setData}
                />
                <OutlineButton
                    className="py-3 px-[29px] md:px-7 rounded-[30px] md:py-4 md:leading-[18px] max-sm:justify-center mt-4 w-[120px] capitalize"
                    disabled={processing}
                    onClick={onClick}
                >
                    To start
                </OutlineButton>
            </motion.form>
            <div className="flex flex-col justify-center gap-5">
                <Title>Progress</Title>
                <p className="mb-16 text-sm">
                    Here you will see when and how much you read. To record,
                    click on the red button above.
                </p>
                <div className="mx-auto inline-flex items-center justify-center p-2 rounded-full bg-dark-800 h-[100px] w-[100px]">
                    <img src="/images/star-icon.png" width={50} height={70} />
                </div>
            </div>
        </>
    );
}
