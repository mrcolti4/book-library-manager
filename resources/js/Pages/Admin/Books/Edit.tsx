import { Icon } from "@iconify/react/dist/iconify.js";
import { Head, useForm } from "@inertiajs/react";
import { ChangeEvent, FormEvent, ReactNode } from "react";

import BookPreview from "@/Components/Admin/Books/BookPreview";
import { DeleteBookModal } from "@/Components/Admin/DeleteBookModal";
import InputField from "@/Components/Auth/InputField";
import { DangerButton } from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import OutlineButton from "@/Components/OutlineButton";
import SectionWrapper from "@/Components/SectionWrapper";
import TextInput from "@/Components/TextInput";

import { useModalContext } from "@/hooks/useModalContext";

import AdminLayout from "@/Layouts/AdminLayout";

import { BookType, EditBook } from "@/types/Book/Book";

function Edit({ book }: { book: BookType }) {
    const { setModal } = useModalContext();
    const {
        setData,
        isDirty,
        data,
        reset,
        post,
        processing,
        errors,
        progress,
    } = useForm<EditBook & { _method: string }>({
        title: book.title,
        author: book.author,
        pages: book.pages,
        published_at: book.published_at,
        poster: book.poster,
        _method: "patch",
    });

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("admin.books.update", book.id), {
            forceFormData: true,
            preserveState: false,
            preserveScroll: true,
            onFinish: () => reset(),
        });
    };

    const handleDelete = () => {
        setModal(<DeleteBookModal id={book.id} />);
    };

    return (
        <>
            <Head title={book.title} />
            <SectionWrapper className="flex w-3/4 gap-5">
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
                        <div>
                            <InputLabel value="Poster: " />
                            <div className="relative">
                                <TextInput
                                    id="poster"
                                    name="poster"
                                    type="file"
                                    error={errors.poster}
                                    className="block w-full p-2 mt-1"
                                    onChange={(
                                        e: ChangeEvent<HTMLInputElement>
                                    ) => {
                                        if (
                                            e.target.files &&
                                            e.target.files.length > 0
                                        ) {
                                            setData(
                                                "poster",
                                                e.target.files[0]
                                            );
                                        }
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
                        </div>
                        {progress && (
                            <progress value={progress.percentage} max="100">
                                {progress.percentage}%
                            </progress>
                        )}
                        <InputError message={errors.poster} className="mt-2" />
                    </div>
                    <div className="col-start-1 col-end-1">
                        <OutlineButton
                            disabled={processing || !isDirty}
                            className="mt-4 max-w-[120px] rounded-xl"
                        >
                            Update
                        </OutlineButton>
                    </div>
                </form>
            </SectionWrapper>
            <SectionWrapper className="lg:w-1/4">
                <div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-white leading-[18px] text-xl">
                            Book preview
                        </h2>
                        <BookPreview book={data} />
                        {isDirty && (
                            <p className="text-yellow-600">
                                You have unsaved changes
                            </p>
                        )}
                    </div>
                    <form>
                        <DangerButton
                            type="button"
                            disabled={false}
                            className="mt-4 max-w-[200px] col-start-1 col-end-1"
                            onClick={handleDelete}
                        >
                            Delete Book
                        </DangerButton>
                    </form>
                </div>
            </SectionWrapper>
        </>
    );
}

Edit.layout = (page: ReactNode) => <AdminLayout children={page} />;

export default Edit;
