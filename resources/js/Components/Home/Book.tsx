import { BookType } from "@/types/Book";

type props = {
    book: BookType;
};

export default function Book({ book }: props) {
    return (
        <div>
            <img
                src={book.poster}
                alt={book.title}
                className="w-[137px] h-[208px] rounded-md"
            />
        </div>
    );
}
