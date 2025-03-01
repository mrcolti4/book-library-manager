import BookItem from "@/Components/Admin/Books/BookItem";
import NavLink from "@/Components/Admin/NavLink";
import SectionWrapper from "@/Components/SectionWrapper";
import AdminLayout from "@/Layouts/AdminLayout";
import { BookType } from "@/types/Book/Book";
import { PaginateData } from "@/types/PaginateData";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Index({ data }: { data: PaginateData<BookType> }) {
    return (
        <AdminLayout>
            <SectionWrapper>
                <div className="grid gap-4">
                    {data.data.map((book) => (
                        <BookItem key={book.id} book={book} />
                    ))}
                </div>
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
        </AdminLayout>
    );
}
