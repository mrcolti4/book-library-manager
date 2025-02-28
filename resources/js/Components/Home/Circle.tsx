import { ReactNode } from "react";

type props = {
    children: ReactNode;
};

export default function Circle({ children }: props) {
    return (
        <span className="py-3 px-4 w-10 h-10 inline-flex items-center justify-center text-xl font-bold text-dark-900 bg-white rounded-full">
            {children}
        </span>
    );
}
