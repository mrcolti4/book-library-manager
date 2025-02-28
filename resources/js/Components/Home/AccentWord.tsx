import { ReactNode } from "react";

type props = {
    children: ReactNode;
    dark?: boolean;
};

export default function AccentWord({ children, dark }: props) {
    return (
        <span className={dark ? "text-dark-700" : "text-white"}>
            {children}
        </span>
    );
}
