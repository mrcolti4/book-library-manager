import { Link } from "@inertiajs/react";
import clsx from "clsx";
import { ReactNode } from "react";

export default function NavLink({
    children,
    href,
    isActive = false,
    className,
    only,
}: {
    children: ReactNode;
    href: string;
    isActive: boolean;
    className?: string;
    only?: string[];
}) {
    const classes = clsx(
        "inline-flex items-center justify-center gap-1 text-xl font-semibold leading-5",
        isActive ? "text-white" : "text-gray-500",
        className
    );

    return (
        <Link
            preserveScroll
            preserveState
            href={href}
            className={classes}
            only={only}
        >
            {children}
        </Link>
    );
}
