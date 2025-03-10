import HeadTitle from "@/Components/Admin/HeadTitle";
import InputField from "@/Components/Auth/InputField";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import OutlineButton from "@/Components/OutlineButton";
import SectionWrapper from "@/Components/SectionWrapper";
import TextInput from "@/Components/TextInput";
import useLabelPadding from "@/hooks/useLabelPadding";
import AdminLayout from "@/Layouts/AdminLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Head, useForm } from "@inertiajs/react";
import {
    ChangeEvent,
    FormEvent,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from "react";

function Create() {
    const { data, setData, post, processing, errors, progress } = useForm<{
        title: string;
        author: string;
        pages: number;
        published_at: string;
        poster: File | string;
    }>({
        title: "",
        author: "",
        pages: 0,
        published_at: "",
        poster: "",
    });
    const [padding, labelRef] = useLabelPadding();

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
                    <div>
                        <div className="relative">
                            <InputLabel
                                className="absolute -translate-y-1/2 left-3 text-dark-700 top-1/2"
                                value="Poster: "
                                ref={labelRef}
                            />
                            <TextInput
                                id="poster"
                                name="poster"
                                type="file"
                                error={errors.poster}
                                className="block w-full mt-1"
                                onChange={(
                                    e: ChangeEvent<HTMLInputElement>
                                ) => {
                                    if (
                                        e.target.files &&
                                        e.target.files.length > 0
                                    ) {
                                        setData("poster", e.target.files[0]);
                                    }
                                }}
                                required
                                style={{
                                    paddingLeft: `${padding}px`,
                                }}
                            />
                            <div className="absolute flex items-center justify-center gap-3 -translate-y-1/2 right-3 top-1/2">
                                {errors.poster && (
                                    <Icon
                                        icon="pajamas:error"
                                        color="red"
                                        width="20"
                                        height="20"
                                    />
                                )}
                            </div>
                        </div>
                        {progress && (
                            <progress value={progress.percentage} max="100">
                                {progress.percentage}%
                            </progress>
                        )}
                        <InputError message={errors.poster} className="mt-2" />
                    </div>
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
