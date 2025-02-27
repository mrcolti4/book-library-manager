import { Record } from "@/types/Library/Record";

export default function DiaryItem({
    record,
    bookPagesCount,
}: {
    record: Record;
    bookPagesCount: number;
}) {
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

    return (
        <div>
            <div className="relative">
                <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-4 border-white rounded-md bg-dark-950 after:content-[' '] after:w-1 after:h-full after:block after:bg-dark-900 after:absolute after:left-2 after:top-6" />
                    <div className="flex items-center justify-between grow">
                        <p className="font-bold text-white">{formattedDate}</p>
                        <p className="mr-5">{record.page_count} pages</p>
                    </div>
                </div>
                <div className="ml-5 mt-7">
                    <div>
                        <p className="text-xl text-white">
                            {percentOfReading.toFixed(1)}%
                        </p>
                        <p>{recordTimeDate.getSeconds()} minutes</p>
                    </div>
                    <div>
                        <p>{pagesPerHour} pages per hour</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
