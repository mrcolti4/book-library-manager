import BookItem from "@/Components/Admin/Books/BookItem";
import HeadTitle from "@/Components/Admin/HeadTitle";
import NavLink from "@/Components/Admin/NavLink";
import TableColumn from "@/Components/Admin/TableColumn";
import TableRow from "@/Components/Admin/TableRow";
import OutlineButton from "@/Components/OutlineButton";
import SectionWrapper from "@/Components/SectionWrapper";
import FormSelect from "@/Components/Select";
import AdminLayout from "@/Layouts/AdminLayout";
import { BookType } from "@/types/Book/Book";
import { PaginateData } from "@/types/PaginateData";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Head, useForm } from "@inertiajs/react";
import { ChangeEvent, FormEvent, ReactNode } from "react";

const sort = [
    { value: "latest", label: "Latest" },
    { value: "oldest", label: "Oldest" },
];
const sortValues = sort.map((s) => s.value);
type sortType = (typeof sortValues)[number];
const columns = [
    { value: "created_at", label: "Created at" },
    { value: "updated_at", label: "Updated at" },
    { value: "title", label: "Book title" },
    { value: "author", label: "Book author" },
];
const columnsValues = columns.map((c) => c.value);
type columnType = (typeof columnsValues)[number];

function Index({ data }: { data: PaginateData<BookType> }) {
    const {
        data: formData,
        setData,
        get,
        processing,
    } = useForm<{ sort: sortType; column: columnType }>({
        sort: "oldest",
        column: "created_at",
    });

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const key = e.target.name as keyof typeof formData;
        setData(key, e.target.value as sortType);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        get(route("admin.books.index"), {
            preserveState: true,
            preserveUrl: true,
        });
    };

    return (
        <>
            <Head title="Admin | Books" />
            <SectionWrapper>
                <HeadTitle>All books</HeadTitle>
                <form
                    className="flex items-center justify-center gap-5 my-5"
                    onSubmit={handleSubmit}
                >
                    <FormSelect
                        name="sort"
                        options={sort}
                        value={formData.sort}
                        onChange={onChange}
                    />
                    <FormSelect
                        name="column"
                        options={columns}
                        value={formData.column}
                        onChange={onChange}
                    />
                    <OutlineButton
                        className="inline-flex gap-4 rounded-3xl"
                        disabled={processing}
                    >
                        Sort <Icon icon="material-symbols:search-rounded" />
                    </OutlineButton>
                </form>
                <table className="w-full border-collapse table-fixed">
                    <thead>
                        <TableRow className="!border-b-0">
                            <TableColumn className="hidden w-1/12 md:table-cell">
                                ID
                            </TableColumn>
                            <TableColumn className="w-1/6">Author</TableColumn>
                            <TableColumn className="w-1/6">Title</TableColumn>
                            <TableColumn className="hidden w-1/6 lg:table-cell">
                                Created at
                            </TableColumn>
                            <TableColumn className="hidden w-1/6 lg:table-cell">
                                Updated at
                            </TableColumn>
                            <TableColumn className="w-2/6">Actions</TableColumn>
                        </TableRow>
                    </thead>
                    <tbody>
                        {data.data.map((book) => (
                            <BookItem key={book.id} book={book} />
                        ))}
                    </tbody>
                </table>
                <ul className="flex items-center justify-between mt-5">
                    {data.links.prev && (
                        <li>
                            <NavLink
                                isActive={data.links.prev !== null}
                                href={data.links.prev}
                            >
                                <Icon icon="material-symbols:arrow-back-rounded" />
                                Previous page
                            </NavLink>
                        </li>
                    )}
                    {data.links.next && (
                        <li className="ml-auto">
                            <NavLink
                                isActive={data.links.next !== null}
                                href={data.links.next}
                            >
                                <Icon icon="material-symbols:arrow-forward-rounded" />
                                Next page
                            </NavLink>
                        </li>
                    )}
                </ul>
            </SectionWrapper>
        </>
    );
}
Index.layout = (page: ReactNode) => <AdminLayout children={page} />;

export default Index;
