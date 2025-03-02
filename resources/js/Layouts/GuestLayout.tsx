import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { ReactNode } from "react";

export default function GuestLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col items-center min-h-screen pt-6 bg-dark-900 sm:justify-center sm:pt-0">
            <div className="w-full px-6 py-4 mt-6 overflow-hidden text-white shadow-md bg-dark-800 sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
