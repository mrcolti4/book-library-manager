import { ReactNode } from "react";

interface props {
    children: ReactNode;
    className?: string;
}

export default function Wrapper({ children, className }: props) {
    return (
        <div className={"bg-dark-800 p-5 rounded-xl gap-3 " + className}>
            {children}
        </div>
    );
}
