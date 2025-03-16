import { ReactNode } from "react";

export default function TableColumn({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <td
            className={
                "font-medium text-white truncate line-clamp-1 " + className
            }
        >
            {children}
        </td>
    );
}
