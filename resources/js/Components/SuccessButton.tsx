import { MouseEventHandler, ReactNode } from "react";

export function SuccessButton({
    className = "",
    disabled,
    children,
    onClick,
}: {
    className?: string;
    disabled: boolean;
    children: ReactNode;
    onClick: MouseEventHandler;
}) {
    return (
        <button
            onClick={onClick}
            className={
                `inline-flex items-center rounded-xl border border-transparent bg-primary px-4 py-2  font-semibold text-white transition duration-150 ease-in-out hover:bg-primary/70 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
