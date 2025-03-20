import { Head, Link, useForm } from "@inertiajs/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "motion/react";

import InputField from "@/Components/Auth/InputField";
import Wrapper from "@/Components/Home/Wrapper";
import AccentWord from "@/Components/Home/AccentWord";
import Circle from "@/Components/Home/Circle";
import PaginationSection from "@/Components/Home/PaginationSection";
import SectionWrapper from "@/Components/SectionWrapper";
import Title from "@/Components/Title";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import usePerPage from "@/hooks/usePerPage";
import { PaginateData } from "@/types/PaginateData";
import { BookType } from "@/types/Book/Book";
import { Library } from "@/types/Library/Library";
import SearchForm from "@/Components/Home/SearchForm";

export default function Home({
    books,
    library,
}: {
    books: PaginateData<BookType>;
    library: Library[];
}) {
    const perPage = usePerPage();

    return (
        <AuthenticatedLayout userLibrary={library}>
            <Head title="Home" />

            <div className="flex flex-col gap-[10px] lg:flex-row">
                <SectionWrapper className="flex flex-col gap-5 md:flex-row lg:flex-col lg:w-1/3">
                    <SearchForm />
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
                            href={route("library.index")}
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
                        next={books.links.next}
                        prev={books.links.prev}
                    />
                </SectionWrapper>
            </div>
        </AuthenticatedLayout>
    );
}
