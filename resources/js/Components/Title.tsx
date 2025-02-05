import { ReactNode } from "react";

type props = {
    children: ReactNode;
};

export default function Title({ children }: props) {
    return (
        <h2 className="font-bold text-white leading-[18px] text-xl">
            {children}
        </h2>
    );
}
