import { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Icon } from "@iconify/react/dist/iconify.js";

import InputField from "@/Components/Auth/InputField";
import Wrapper from "@/Components/Home/Wrapper";
import AccentWord from "@/Components/Home/AccentWord";
import Circle from "@/Components/Home/Circle";
import SliderSection from "@/Components/Home/SliderSection";
import OutlineButton from "@/Components/OutlineButton";
import SectionWrapper from "@/Components/SectionWrapper";
import Title from "@/Components/Title";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { BookType } from "@/types/Book/Book";
import { PaginateData } from "@/types/PaginateData";
import { useAppDispatch } from "@/redux/store";
import { setBooks, setNextCursor } from "@/redux/books/slice";

type FormState = {
    title: string;
    author: string;
};

interface props {
    initialBooks: PaginateData<BookType>;
}

export default function Dashboard({ initialBooks }: props) {
    const dispatch = useAppDispatch();
    const { data, setData, post, processing, reset } = useForm<FormState>({
        title: "",
        author: "",
    });

    useEffect(() => {
        dispatch(setNextCursor(initialBooks.next_cursor));
        dispatch(setBooks(initialBooks.data));
    }, [dispatch]);

    return (
        <AuthenticatedLayout>
            <Head title="Home" />

            <div className="flex flex-col gap-[10px] lg:flex-row">
                <SectionWrapper className="flex flex-col gap-5 md:flex-row lg:flex-col lg:w-1/3">
                    <form className="flex flex-col gap-2 md:w-1/2 lg:w-auto">
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
                            className="text-sm py-3 px-[29px] md:px-7 rounded-[30px] md:py-4 md:leading-[18px] max-sm:justify-center mt-4 w-[120px]"
                            disabled={processing}
                        >
                            To apply
                        </OutlineButton>
                    </form>
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
                            className="inline-flex justify-between items-center underline"
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
                    <SliderSection />
                </SectionWrapper>
            </div>
        </AuthenticatedLayout>
    );
}
