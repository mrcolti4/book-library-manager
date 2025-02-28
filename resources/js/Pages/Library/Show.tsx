import { MouseEvent, useState } from "react";
import { Head, router, useForm } from "@inertiajs/react";

import SectionWrapper from "@/Components/SectionWrapper";
import { StartReadingSection } from "@/Components/Library/StartReadingSection";
import { StopReadingSection } from "@/Components/Library/StopReadingSection";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { BookInLibrary } from "@/types/Library/Library";
import { BookType } from "@/types/Book/Book";
import { AnimatePresence } from "motion/react";
import Title from "@/Components/Title";
import { LeftSectionLayout } from "@/Components/Common/LeftSectionLayout";
import { Record } from "@/types/Library/Record";

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
    records: Record[];
}) {
    const lastRecordPage = records.length > 0 ? records[0].page_stop : 0;

    const [startTime, setStartTime] = useState<Date>(new Date());
    const [status, setStatus] = useState<ReadingStatus>("start");
    const { data, setData, processing, reset } = useForm({
        start_page: lastRecordPage,
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
                    book={book}
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

        const currentEndTime = new Date();

        router.post(`/record/store`, {
            start_time: formatISOWithoutMilliseconds(startTime),
            end_time: formatISOWithoutMilliseconds(currentEndTime),
            page_start: data.start_page,
            page_stop: data.stop_page,
            favorite_book_id: favoriteBook.id,
        });

        reset("start_page", "stop_page");
    }

    return (
        <AuthenticatedLayout>
            <Head title={book.title} />
            <div className="flex flex-col gap-[10px] lg:flex-row min-h-full grow h-full">
                <LeftSectionLayout>
                    <AnimatePresence>{section}</AnimatePresence>
                </LeftSectionLayout>
                <SectionWrapper className="h-full p-4 text-center lg:w-2/3 grow">
                    <Title className="!text-3xl text-left mb-10">
                        My reading
                    </Title>
                    <img
                        className="mx-auto w-[224px] h-[340px]"
                        src={book.poster}
                    />
                    <div className="my-[25px]">
                        <h2 className="text-xl font-bold text-white">
                            {book.title}
                        </h2>
                        <p className="text-sm">{book.author}</p>
                    </div>
                    <div className="inline-flex items-center justify-center border border-white rounded-full mb-14">
                        <div className="w-10 h-10 m-1 rounded-full bg-red" />
                    </div>
                </SectionWrapper>
            </div>
        </AuthenticatedLayout>
    );
}
