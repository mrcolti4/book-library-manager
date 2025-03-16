import { usePage } from "@inertiajs/react";
import { AnimatePresence } from "motion/react";
import { Fragment, ReactNode, useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

import NavLink from "@/Components/Admin/NavLink";
import SectionWrapper from "@/Components/SectionWrapper";
import FlashMessage from "@/Components/Common/FlashMessage";

import AuthenticatedLayout from "./AuthenticatedLayout";
import { Transition } from "@headlessui/react";

export default function AdminLayout({ children }: { children: ReactNode }) {
    const [isShowingSidebar, setIsShowingSidebar] = useState<boolean>(false);
    const [success, setSuccess] = useState<string | null>("");
    const [error, setError] = useState<string | null>("");
    const isBookActive = route().current()?.startsWith("admin.books") ?? false;
    const isUserActive = route().current()?.startsWith("admin.users") ?? false;
    const { props } = usePage<{
        flash: { success: string | null; error: string | null };
    }>();
    useEffect(() => {
        if (props.flash.success) {
            setSuccess(props.flash.success);
        }
        if (props.flash.error) {
            setError(props.flash.error);
        }
    }, [props.flash]);

    return (
        <AuthenticatedLayout>
            <AnimatePresence>
                {success && (
                    <FlashMessage
                        className="bg-emerald-700/80"
                        setMessage={setSuccess}
                    >
                        {success}
                    </FlashMessage>
                )}
                {error && (
                    <FlashMessage
                        className="bg-rose-700/80"
                        setMessage={setError}
                    >
                        {error}
                    </FlashMessage>
                )}
            </AnimatePresence>
            <div className="relative flex flex-col gap-5 lg:flex-row">
                <Transition
                    as="div"
                    className="relative"
                    show={true}
                    enter="duration-300"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="duration-300"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                    <SectionWrapper className="p-5 lg:w-full">
                        <ul className="flex flex-col gap-4">
                            <li className="flex max-lg:items-center lg:flex-col">
                                <NavLink
                                    isActive={isBookActive}
                                    href="/admin/books"
                                    only={["books"]}
                                >
                                    <Icon
                                        icon="material-symbols:book-outline"
                                        fontSize={20}
                                    />
                                    Books
                                </NavLink>
                                {isBookActive && (
                                    <ul className="flex gap-4 pl-4 max-lg:items-center lg:gap-2 lg:mt-2 lg:flex-col">
                                        <li>
                                            <NavLink
                                                isActive={route().current(
                                                    "admin.books.index"
                                                )}
                                                only={["books"]}
                                                href="/admin/books"
                                            >
                                                All
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                isActive={route().current(
                                                    "admin.books.create"
                                                )}
                                                href="/admin/books/create"
                                            >
                                                Create
                                            </NavLink>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className="flex max-lg:items-center lg:flex-col">
                                <NavLink
                                    isActive={isUserActive}
                                    href="/admin/users"
                                    only={["books"]}
                                >
                                    <Icon
                                        icon="material-symbols:group"
                                        fontSize={20}
                                    />
                                    Users
                                </NavLink>
                                {isUserActive && (
                                    <ul className="flex gap-2 pl-4 max-lg:items-center lg:flex-col lg:mt-2">
                                        <li>
                                            <NavLink
                                                isActive={route().current(
                                                    "admin.users.index"
                                                )}
                                                href="/admin/users"
                                            >
                                                All
                                            </NavLink>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </SectionWrapper>
                </Transition>
                {children}
            </div>
        </AuthenticatedLayout>
    );
}
