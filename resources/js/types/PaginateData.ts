export type PaginateData<T> = {
    data: Array<T>;
    links: {
        next: string;
        prev: string;
    };
    meta: {
        next_cursor: string | null;
        prev_cursor: string | null;
        per_page: number;
    };
};
