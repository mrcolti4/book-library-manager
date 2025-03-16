export type BookType = {
    id: number;
    title: string;
    author: string;
    poster: string;
    published_at: number;
    pages: number;
    created_at: string;
    updated_at: string;
};

export type EditBook = {
    title: string;
    author: string;
    pages: number;
    published_at: number;
    poster: File | string | null;
}
