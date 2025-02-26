import { MouseEvent, useState } from "react";
import { router, useForm } from "@inertiajs/react";

import SectionWrapper from "@/Components/SectionWrapper";
import { StartReadingSection } from "@/Components/Library/StartReadingSection";
import { StopReadingSection } from "@/Components/Library/StopReadingSection";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { BookInLibrary } from "@/types/Library/Library";
import { BookType } from "@/types/Book/Book";

type ReadingStatus = "start" | "reading" | "stop";

function formatISOWithoutMilliseconds(date: Date) {
    return date.toISOString().replace(/\.\d+Z$/, "Z");
}

export default function Show({
    book,
    favoriteBook,
    records,
}: {
    book: BookType;
    favoriteBook: BookInLibrary;
    records: [];
}) {
    const [startTime, setStartTime] = useState<Date>(new Date());
    const [status, setStatus] = useState<ReadingStatus>("start");
    const { data, setData, post, processing, reset } = useForm({
        start_page: 0,
        stop_page: 0,
    });

    let section;
    switch (status) {
        case "start":
            section = (
                <StartReadingSection
                    id="start_page"
                    data={data.start_page}
                    setData={setData}
                    processing={processing}
                    onClick={handleStartReading}
                />
            );
            break;

        case "reading":
            section = (
                <StopReadingSection
                    id="stop_page"
                    records={records}
                    data={data.stop_page}
                    setData={setData}
                    processing={processing}
                    onClick={handleStopReading}
                />
            );
            break;
    }

    function handleStartReading(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (data.start_page === 0) {
            return;
        }
        setStatus("reading");
        setStartTime(new Date());
    }

    function handleStopReading(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const pageCount = data.stop_page - data.start_page;
        if (data.start_page === 0 && pageCount <= 0) {
            return;
        }

        const currentEndTime = new Date();

        router.post(`/record/store`, {
            start_time: formatISOWithoutMilliseconds(startTime),
            end_time: formatISOWithoutMilliseconds(currentEndTime),
            page_count: pageCount,
            favorite_book_id: favoriteBook.id,
        });
        setStatus("stop");
    }

    return (
        <AuthenticatedLayout>
            <div className="flex flex-col gap-[10px] lg:flex-row min-h-full grow h-full">
                <SectionWrapper className="flex flex-col h-full gap-5 md:flex-row lg:flex-col lg:w-1/3 grow">
                    {section}
                </SectionWrapper>
                <SectionWrapper className="h-full p-4 lg:w-2/3 grow">
                    <img src={book.poster} />
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                    <div className="inline-flex items-center justify-center border border-white rounded-full">
                        <div className="w-10 h-10 m-1 rounded-full bg-red" />
                    </div>
                </SectionWrapper>
            </div>
        </AuthenticatedLayout>
    );
}
