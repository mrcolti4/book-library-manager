import { MouseEventHandler, ReactNode } from "react";

interface props {
    children: ReactNode;
    onClick: MouseEventHandler;
    disabled: boolean;
}

export default function PaginationButton({
    children,
    onClick,
    disabled,
}: props) {
    return (
        <button
            className="border-2 p-1 rounded-full border-dark-800 inline-flex justify-center items-center"
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
