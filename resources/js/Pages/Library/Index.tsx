import { router, useForm } from "@inertiajs/react";
import { motion } from "motion/react";
import { ChangeEvent, useState } from "react";
import { Swiper as SwiperType } from "swiper/types";

import InputField from "@/Components/Auth/InputField";
import LibrarySlider from "@/Components/Library/LibrarySlider";
import OutlineButton from "@/Components/OutlineButton";
import SectionWrapper from "@/Components/SectionWrapper";
import Title from "@/Components/Title";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { BookInLibrary } from "@/types/Library/Library";
import PaginationButton from "@/Components/Home/PaginationButton";
import usePerPage from "@/hooks/usePerPage";
import { Icon } from "@iconify/react/dist/iconify.js";
import AccentWord from "@/Components/Home/AccentWord";

export default function Index({ library }: { library: BookInLibrary[] }) {
    const perPage = usePerPage();
    const { data, setData, post, processing, reset } = useForm({
        title: "",
        author: "",
    });
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(
        null
    );
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const handlePrevButton = () => {
        swiperInstance?.slideTo(currentSlide - perPage);
    };

    const handleNextButton = () => {
        swiperInstance?.slideTo(currentSlide + perPage);
    };

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        router.get(
            "/library",
            {
                filter: e.target.value,
            },
            {
                preserveScroll: true,
                preserveState: true,
                only: ["library"],
            }
        );
    };

    return (
        <AuthenticatedLayout userLibrary={library}>
            <div className="flex flex-col gap-[10px] lg:flex-row min-h-full grow h-full">
                <SectionWrapper className="flex flex-col h-full gap-5 md:flex-row lg:flex-col lg:w-1/3 grow">
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
                            id="title"
                            type="text"
                            label="Book title: "
                            data={data.title}
                            setData={setData}
                        />
                        <InputField
                            id="author"
                            type="text"
                            label="The author: "
                            data={data.author}
                            setData={setData}
                        />
                        <OutlineButton
                            className="text-sm py-3 px-[29px] md:px-7 rounded-[30px] md:py-4 md:leading-[18px] max-sm:justify-center mt-4 w-[120px] capitalize"
                            disabled={processing}
                        >
                            To apply
                        </OutlineButton>
                    </motion.form>
                </SectionWrapper>
                <SectionWrapper className="h-full p-4 lg:w-2/3 grow">
                    <div className="flex items-center justify-between mb-10">
                        <Title>My Library</Title>

                        <div className="flex gap-4">
                            <select onChange={handleSelectChange}>
                                <option value="unread">Unread</option>
                                <option value="in_progress">In progress</option>
                                <option value="done">Done</option>
                                <option value="all_books">All books</option>
                            </select>
                            {library.length > 0 && (
                                <>
                                    <PaginationButton
                                        onClick={handlePrevButton}
                                        disabled={false}
                                    >
                                        <Icon
                                            icon="material-symbols:chevron-left-rounded"
                                            width="30"
                                            height="30"
                                        />
                                    </PaginationButton>
                                    <PaginationButton
                                        onClick={handleNextButton}
                                        disabled={false}
                                    >
                                        <Icon
                                            icon="material-symbols:chevron-right-rounded"
                                            width="30"
                                            height="30"
                                        />
                                    </PaginationButton>
                                </>
                            )}
                        </div>
                    </div>
                    {library.length > 0 ? (
                        <LibrarySlider
                            data={library}
                            setSwiperInstance={setSwiperInstance}
                            setCurrentSlideIndex={setCurrentSlide}
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center gap-5 max-w-[274px] mx-auto">
                            <div className="inline-flex justify-center items-center p-5 rounded-full bg-dark-800 w-[130px] h-[130px]">
                                <img src="/images/library-books.png" />
                            </div>
                            <p className="text-sm text-center text-white">
                                To start training, add{" "}
                                <AccentWord dark={true}>
                                    some of your books
                                </AccentWord>{" "}
                                or from the recommended ones
                            </p>
                        </div>
                    )}
                </SectionWrapper>
            </div>
        </AuthenticatedLayout>
    );
}
