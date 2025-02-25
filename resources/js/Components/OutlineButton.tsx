import React, { MouseEventHandler } from "react";
import PrimaryButton from "./PrimaryButton";

type props = {
    children: React.ReactNode;
    className?: string;
    disabled: boolean;
    onClick?: MouseEventHandler;
};

export default function OutlineButton({
    children,
    className,
    disabled,
    onClick,
}: props) {
    return (
        <button
            className={`inline-flex px-4 py-[10px] items-center justify-center border border-dark-700 text-white font-bold transition duration-150 ease-in-out hover:bg-white hover:text-dark-800 hover:border-white active:bg-dark-900 ${
                disabled && "opacity-25"
            } ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
