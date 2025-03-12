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

    const handleSidebarClick = () => {};

    return (
        <AuthenticatedLayout>
            <AnimatePresence>
                {success && (
                    <FlashMessage
                        className="bg-emerald-700/50"
                        setMessage={setSuccess}
                    >
                        {success}
                    </FlashMessage>
                )}
                {error && (
                    <FlashMessage
                        className="bg-rose-700/50"
                        setMessage={setError}
                    >
                        {error}
                    </FlashMessage>
                )}
            </AnimatePresence>
            <div className="relative flex gap-5">
                <button
                    onClick={() => setIsShowingSidebar(true)}
                    className="absolute z-10 inline-flex rounded-md top-2 left-2 lg:hidden bg-dark-950"
                >
                    <Icon
                        icon="material-symbols:menu-rounded"
                        color="white"
                        fontSize={30}
                    />
                </button>
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
                    <SectionWrapper className="absolute p-5 lg:bg-dark-800 bg-dark-950 lg:static lg:w-full">
                        <ul className="flex flex-col gap-4">
                            <li>
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
                                    <ul className="flex flex-col gap-2 pl-4 mt-2">
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
                            <li>
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
                                    <ul className="flex flex-col gap-2 pl-4 mt-2">
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
