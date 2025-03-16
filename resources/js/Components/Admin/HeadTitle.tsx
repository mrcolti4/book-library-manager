import { ReactNode } from "react";

export default function HeadTitle({ children }: { children: ReactNode }) {
    return <h1 className="my-4 text-3xl font-bold text-white">{children}</h1>;
}
