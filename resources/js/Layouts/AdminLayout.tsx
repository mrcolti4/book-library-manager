import { ReactNode } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

import NavLink from "@/Components/Admin/NavLink";
import SectionWrapper from "@/Components/SectionWrapper";
import AuthenticatedLayout from "./AuthenticatedLayout";

export default function AdminLayout({ children }: { children: ReactNode }) {
    const isBookActive = route().current("admin.books.index");
    return (
        <AuthenticatedLayout>
            <div className="flex gap-5">
                <SectionWrapper className="!w-1/6 p-5">
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
                                isActive={route().current("adsmin.books.index")}
                                href="/admin/books"
                                only={["books"]}
                            >
                                <Icon
                                    icon="material-symbols:group"
                                    fontSize={20}
                                />
                                Users
                            </NavLink>
                        </li>
                    </ul>
                </SectionWrapper>
                {children}
            </div>
        </AuthenticatedLayout>
    );
}
