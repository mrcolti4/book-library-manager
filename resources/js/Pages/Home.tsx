import { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AnimatePresence, motion } from "motion/react";

import InputField from "@/Components/Auth/InputField";
import Wrapper from "@/Components/Home/Wrapper";
import AccentWord from "@/Components/Home/AccentWord";
import Circle from "@/Components/Home/Circle";
import PaginationSection from "@/Components/Home/PaginationSection";
import OutlineButton from "@/Components/OutlineButton";
import SectionWrapper from "@/Components/SectionWrapper";
import Title from "@/Components/Title";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import usePerPage from "@/hooks/usePerPage";
import { PaginateData } from "@/types/PaginateData";
import { BookType } from "@/types/Book/Book";

type FormState = {
    title: string;
    author: string;
};

export default function Home({ books }: { books: PaginateData<BookType> }) {
    const perPage = usePerPage();
    const { data, setData, post, processing, reset } = useForm<FormState>({
        title: "",
        author: "",
    });

    return (
        <AuthenticatedLayout>
            <Head title="Home" />

            <div className="flex flex-col gap-[10px] lg:flex-row">
                <SectionWrapper className="flex flex-col gap-5 md:flex-row lg:flex-col lg:w-1/3">
                    <AnimatePresence>
                        <motion.form
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
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
                    </AnimatePresence>
                    <Wrapper className="flex flex-col gap-5 md:w-1/2 lg:w-auto">
                        <Title>Start your workout</Title>
                        <div className="flex gap-3">
                            <Circle>1</Circle>
                            <p>
                                <AccentWord>
                                    Create a personal library:{" "}
                                </AccentWord>
                                add the books you intend to read to it.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Circle>2</Circle>
                            <p>
                                <AccentWord>
                                    Create your first workout:{" "}
                                </AccentWord>
                                define a goal, choose a period, start training.
                            </p>
                        </div>
                        <Link
                            className="inline-flex items-center justify-between underline"
                            href={route("profile.edit")}
                        >
                            My library
                            <Icon
                                icon="material-symbols:arrow-forward-rounded"
                                width="30"
                                height="30"
                                color="white"
                            />
                        </Link>
                    </Wrapper>
                    <Wrapper className="hidden lg:flex">
                        <img
                            src="/images/home-book.png"
                            className="w-10 h-10"
                        />
                        <p>
                            "Books are <AccentWord>windows</AccentWord> to the
                            world, and reading is a journey into the unknown."
                        </p>
                    </Wrapper>
                </SectionWrapper>
                <SectionWrapper className="lg:w-2/3">
                    <PaginationSection
                        books={books.data}
                        nextPageUrl={books.next_page_url}
                        prevPageUrl={books.prev_page_url}
                    />
                </SectionWrapper>
            </div>
        </AuthenticatedLayout>
    );
}
