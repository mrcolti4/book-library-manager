import BookItem from "@/Components/Admin/Books/BookItem";
import NavLink from "@/Components/Admin/NavLink";
import TableColumn from "@/Components/Admin/TableColumn";
import TableRow from "@/Components/Admin/TableRow";
import SectionWrapper from "@/Components/SectionWrapper";
import AdminLayout from "@/Layouts/AdminLayout";
import { BookType } from "@/types/Book/Book";
import { PaginateData } from "@/types/PaginateData";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Head } from "@inertiajs/react";
import { ReactNode } from "react";

function Index({ data }: { data: PaginateData<BookType> }) {
    return (
        <>
            <Head title="Admin | Books" />
            <SectionWrapper>
                <table className="w-full border-collapse table-fixed">
                    <thead>
                        <TableRow className="!border-b-0">
                            <TableColumn className="w-1/12">ID</TableColumn>
                            <TableColumn className="w-1/6">Author</TableColumn>
                            <TableColumn className="w-1/6">Title</TableColumn>
                            <TableColumn className="w-1/6">
                                Created at
                            </TableColumn>
                            <TableColumn className="w-1/6">
                                Updated at
                            </TableColumn>
                            <TableColumn className="w-1/6">Actions</TableColumn>
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
