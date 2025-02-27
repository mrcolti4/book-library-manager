import { MouseEventHandler } from "react";
import { BookType } from "../Book/Book";

export interface Record {
    id: number;
    favorite_book_id: number;
    user_id: number;
    start_time: string;
    end_time: string;
    page_count: number;
    created_at: string;
    updated_at: string;
}

export interface StartRecordSectionsProps {
    id: string;
    data: string | number;
    setData: Function;
    processing: boolean;
    onClick: MouseEventHandler;
}

export interface StopRecordSectionProps extends StartRecordSectionsProps {
    records: Record[];
    book: BookType
}