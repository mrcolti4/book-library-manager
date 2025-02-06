import { ReactNode } from "react";

type props = {
    children: ReactNode;
    className?: string;
};

export default function Title({ children, className }: props) {
    return (
        <h2
            className={
                "font-bold text-white leading-[18px] text-xl " + className
            }
        >
            {children}
        </h2>
    );
}
