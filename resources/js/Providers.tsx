import { ReactNode } from "react";

type props = {
    children: ReactNode;
};

export default function Providers({ children }: props) {
    return <>{children}</>;
}
