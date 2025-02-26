import { MouseEventHandler } from "react";

export interface StartRecordSectionsProps {
    id: string;
    data: string | number;
    setData: Function;
    processing: boolean;
    onClick: MouseEventHandler;
}

export interface StopRecordSectionProps extends StartRecordSectionsProps {
    records: [];

}