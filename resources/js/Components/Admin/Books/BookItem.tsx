import { DangerButton } from "@/Components/DangerButton";
import OutlineButton from "@/Components/OutlineButton";
import { useModalContext } from "@/hooks/useModalContext";
import { BookType } from "@/types/Book/Book";
import { DeleteBookModal } from "../DeleteBookModal";
import { router } from "@inertiajs/react";
import TableColumn from "../TableColumn";
import TableRow from "../TableRow";

export default function BookItem({ book }: { book: BookType }) {
    const { setModal } = useModalContext();
    const handleDelete = () => {
        setModal(<DeleteBookModal id={book.id} />);
    };

    const handleUpdate = () => {
        router.visit(route("admin.books.edit", book.id));
    };

    return (
        <TableRow className="transition hover:bg-dark-950">
            <TableColumn className="hidden w-1/12 md:table-cell">
                {book.id}
            </TableColumn>
            <TableColumn className="w-1/6">{book.title}</TableColumn>
            <TableColumn className="w-1/6">{book.author}</TableColumn>
            <TableColumn className="hidden w-1/6 lg:table-cell">
                {new Date(book.created_at).toLocaleString()}
            </TableColumn>
            <TableColumn className="hidden w-1/6 lg:table-cell">
                {book.updated_at
                    ? new Date(book.updated_at).toLocaleString()
                    : "-"}
            </TableColumn>
            <TableColumn className="flex w-2/6 gap-3">
                <OutlineButton
                    onClick={handleUpdate}
                    disabled={false}
                    className="rounded-xl"
                >
                    Update
                </OutlineButton>
                <DangerButton
                    className="hidden lg:block"
                    disabled={false}
                    onClick={handleDelete}
                >
                    Delete
                </DangerButton>
            </TableColumn>
        </TableRow>
    );
}
