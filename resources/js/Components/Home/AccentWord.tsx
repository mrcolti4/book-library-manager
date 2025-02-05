import { ReactNode } from "react";

type props = {
    children: ReactNode;
};

export default function AccentWord({ children }: props) {
    return <span className="text-white">{children}</span>;
}
