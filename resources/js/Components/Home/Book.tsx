import { BookType } from "@/types/Book/Book";

type props = {
    book: BookType;
};

export default function Book({ book }: props) {
    return (
        <div className="text-center">
            <img
                src={book.poster}
                alt={book.title}
                className="w-[137px] h-[208px] rounded-md"
            />
            <h3 className="text-white font-bold">{book.title}</h3>
            <h4 className="text-sm">{book.author}</h4>
        </div>
    );
}
