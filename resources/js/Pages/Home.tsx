import InputField from "@/Components/Auth/InputField";
import AccentWord from "@/Components/Home/AccentWord";
import Circle from "@/Components/Home/Circle";
import OutlineButton from "@/Components/OutlineButton";
import PrimaryButton from "@/Components/PrimaryButton";
import SectionWrapper from "@/Components/SectionWrapper";
import Title from "@/Components/Title";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Head, Link, useForm } from "@inertiajs/react";

type formState = {
    title: string;
    author: string;
};

export default function Dashboard() {
    const { data, setData, post, processing, reset } = useForm({
        title: "",
        author: "",
    });

    return (
        <AuthenticatedLayout>
            <Head title="Home" />

            <div className="flex flex-col gap-[10px]">
                <SectionWrapper className="flex flex-col gap-5">
                    <form className="flex flex-col gap-2">
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
                            className="text-sm py-3 px-[29px] md:px-[54px] rounded-[30px] md:py-4 md:text-xl md:leading-[20px] max-sm:justify-center mt-4 max-sm:w-[120px]"
                            disabled={processing}
                        >
                            To apply
                        </OutlineButton>
                    </form>
                    <div className="bg-dark-800 p-5 rounded-xl flex flex-col gap-5">
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
                    </div>
                </SectionWrapper>
                <SectionWrapper>
                    <Title>Recommended</Title>
                </SectionWrapper>
            </div>
        </AuthenticatedLayout>
    );
}
