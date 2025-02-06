export type PaginateData<T> = {
    data: Array<T>;
    next_cursor: string;
    next_page_url: string;
    path: string;
    per_page: number;
    prev_cursor: string | null;
    prev_page_url: string | null;
};
