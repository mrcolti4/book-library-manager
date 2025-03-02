import HeadTitle from "@/Components/Admin/HeadTitle";
import InputField from "@/Components/Auth/InputField";
import OutlineButton from "@/Components/OutlineButton";
import SectionWrapper from "@/Components/SectionWrapper";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm } from "@inertiajs/react";
import { FormEvent, ReactNode } from "react";

function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        author: "",
        pages: 0,
        published_at: "",
        poster: "",
    });

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("admin.books.store"));
    };

    return (
        <>
            <Head title="Create Book" />
            <SectionWrapper>
                <HeadTitle>Create Book</HeadTitle>
                <form onSubmit={submit} className="grid grid-cols-2 gap-4">
                    <InputField
                        id="title"
                        label="Title: "
                        type="text"
                        data={data.title}
                        setData={setData}
                        error={errors.title}
                    />
                    <InputField
                        id="author"
                        label="Author: "
                        type="text"
                        data={data.author}
                        setData={setData}
                        error={errors.author}
                    />
                    <InputField
                        label="Pages: "
                        id="pages"
                        type="number"
                        data={data.pages}
                        setData={setData}
                        error={errors.pages}
                    />
                    <InputField
                        label="Published at: "
                        id="published_at"
                        type="text"
                        data={data.published_at}
                        setData={setData}
                        error={errors.published_at}
                    />
                    <InputField
                        label="Poster: "
                        id="poster"
                        type="text"
                        data={data.poster}
                        setData={setData}
                        error={errors.poster}
                    />
                    <OutlineButton
                        disabled={processing}
                        className="mt-4 max-w-[200px] col-start-1 col-end-1"
                    >
                        Create book
                    </OutlineButton>
                </form>
            </SectionWrapper>
        </>
    );
}
Create.layout = (page: ReactNode) => <AdminLayout children={page} />;

export default Create;
