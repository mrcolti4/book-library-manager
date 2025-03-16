import { ReactNode } from "react";

export default function TableRow({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <tr
            className={
                "flex items-center justify-between p-3 border border-b-0 last:border-b-2 rounded-xl border-dark-950 " +
                className
            }
        >
            {children}
        </tr>
    );
}
