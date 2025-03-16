import { EditBook } from "@/types/Book/Book";

export default function BookPreview({ book }: { book: EditBook }) {
    return (
        <div>
            <div className="flex flex-col justify-center line-clamp-1">
                {typeof book.poster === "string" && (
                    <img
                        className="w-[150px] h-[208px] rounded-md"
                        src={book.poster}
                        alt={book.poster}
                    />
                )}
                {book.poster instanceof File && (
                    <img
                        className="w-[150px] h-[208px] rounded-md"
                        src={URL.createObjectURL(book.poster)}
                    />
                )}
                <p className="mt-4 text-xs font-bold text-white line-clamp-1 lg:text-sm">
                    {book.title}
                </p>
                <p className="text-xs line-clamp-1 lg:text-sm ">
                    {book.author}
                </p>
            </div>
        </div>
    );
}
