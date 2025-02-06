import { MouseEventHandler, ReactNode } from "react";

interface props {
    children: ReactNode;
    onClick: MouseEventHandler;
}

export default function SliderButton({ children, onClick }: props) {
    return (
        <button
            className="border-2 p-1 rounded-full border-dark-800 inline-flex justify-center items-center"
            onClick={onClick}
        >
            {children}
        </button>
    );
}
