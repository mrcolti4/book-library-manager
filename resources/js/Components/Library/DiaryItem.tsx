import { useModalContext } from "@/hooks/useModalContext";
import { Record } from "@/types/Library/Record";
import { Icon } from "@iconify/react/dist/iconify.js";
import clsx from "clsx";
import DeleteRecordModal from "./DeleteRecordModal";

export default function DiaryItem({
    record,
    bookPagesCount,
    activeId,
}: {
    record: Record;
    bookPagesCount: number;
    activeId: number;
}) {
    const { setModal } = useModalContext();
    const classes = clsx("flex items-center gap-3", {
        "opacity-50": activeId !== record.id,
    });
    const date = new Date(record.created_at);
    const recordTime =
        new Date(record.end_time).getTime() -
        new Date(record.start_time).getTime();
    const recordTimeDate = new Date(recordTime);
    const percentOfReading = (record.page_count / bookPagesCount) * 100;
    const formattedDate = date.toLocaleDateString("en-UK").replace(/\//g, ".");
    const pagesPerHour = (
        (record.page_count * 60) /
        recordTimeDate.getSeconds()
    ).toFixed();

    const handleDeleteBtnClick = () => {
        setModal(<DeleteRecordModal id={record.id} />);
    };

    return (
        <div>
            <div className="relative">
                <div className={classes}>
                    <div className="w-5 h-5 border-4 border-white rounded-md bg-dark-950 after:content-[' '] after:w-1 after:h-full after:block after:bg-dark-900 after:absolute after:left-2 after:top-6" />
                    <div className="flex items-center justify-between grow">
                        <p className="font-bold text-white">{formattedDate}</p>
                        <p className="mr-5">{record.page_count} pages</p>
                    </div>
                </div>
                <div className="flex items-center justify-between ml-5 mt-7">
                    <div>
                        <p className="text-xl text-white">
                            {percentOfReading.toFixed(1)}%
                        </p>
                        <p>{recordTimeDate.getSeconds()} minutes</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="max-w-16">
                            <img src="/images/block.png" />
                            <p className="text-xs text-center">
                                {pagesPerHour} pages per hour
                            </p>
                        </div>
                        <button onClick={handleDeleteBtnClick}>
                            <Icon
                                icon="material-symbols:delete"
                                fontSize={18}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
