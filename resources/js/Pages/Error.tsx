import GuestLayout from "@/Layouts/GuestLayout";
import { Link } from "@inertiajs/react";
import { ReactNode } from "react";

function Error({
    status,
    message,
    file,
    line,
}: {
    status: number;
    message: string;
    file: string;
    line: string;
}) {
    return (
        <div>
            <h1>{status}</h1>
            <p>{message}</p>
            <Link
                href={route("logout")}
                method="post"
                as="button"
                className="text-xl text-white rounded-md hover:text-dark-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Log Out
            </Link>
        </div>
    );
}
Error.layout = (page: ReactNode) => <GuestLayout children={page} />;

export default Error;
