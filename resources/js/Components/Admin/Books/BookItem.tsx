import { DangerButton } from "@/Components/DangerButton";
import OutlineButton from "@/Components/OutlineButton";
import { useModalContext } from "@/hooks/useModalContext";
import { BookType } from "@/types/Book/Book";
import { DeleteBookModal } from "../DeleteBookModal";
import { router } from "@inertiajs/react";

export default function BookItem({ book }: { book: BookType }) {
    const { setModal } = useModalContext();
    const handleDelete = () => {
        setModal(<DeleteBookModal id={book.id} />);
    };

    const handleUpdate = () => {
        router.visit(route("admin.books.edit", book.id));
    };

    return (
        <div className="flex items-center justify-between p-3 border rounded-xl border-dark-950">
            <div className="flex gap-5 font-bold text-white">
                <p>{book.id}</p>
                <p>{book.title}</p>
                <p>{book.author}</p>
                <p>{book.created_at}</p>
                <p>{book.updated_at}</p>
            </div>
            <div className="flex gap-3">
                <OutlineButton
                    onClick={handleUpdate}
                    disabled={false}
                    className="rounded-xl"
                >
                    Update
                </OutlineButton>
                <DangerButton disabled={false} onClick={handleDelete}>
                    Delete
                </DangerButton>
            </div>
        </div>
    );
}
