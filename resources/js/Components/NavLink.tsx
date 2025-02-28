import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "relative inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "after:content-[''] after:w-full after:rounded-xl after:h-1 after:bg-accent after:absolute after:left-0 after:bottom-3 text-white"
                    : "text-dark-700 hover:-gray-300 hover:text-gray-300 focus:-gray-300 focus:text-gray-500") +
                className
            }
        >
            {children}
        </Link>
    );
}
