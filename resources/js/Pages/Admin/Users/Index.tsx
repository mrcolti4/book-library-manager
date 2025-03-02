import { Icon } from "@iconify/react/dist/iconify.js";
import { Head } from "@inertiajs/react";
import { ReactNode } from "react";

import HeadTitle from "@/Components/Admin/HeadTitle";
import TableColumn from "@/Components/Admin/TableColumn";
import TableRow from "@/Components/Admin/TableRow";
import UserItem from "@/Components/Admin/Users/UserItem";
import NavLink from "@/Components/NavLink";
import SectionWrapper from "@/Components/SectionWrapper";

import AdminLayout from "@/Layouts/AdminLayout";

import { AuthenticateUserData } from "@/types";
import { PaginateData } from "@/types/PaginateData";

function Index({ data }: { data: PaginateData<AuthenticateUserData> }) {
    return (
        <>
            <Head title="Admin | Users" />
            <SectionWrapper>
                <HeadTitle>Users</HeadTitle>
                <table className="w-full border-collapse table-fixed">
                    <thead>
                        <TableRow className="!border-b-0">
                            <TableColumn className="w-1/12">ID</TableColumn>
                            <TableColumn className="w-1/6">
                                Username
                            </TableColumn>
                            <TableColumn className="w-1/6">Email</TableColumn>
                            <TableColumn className="w-1/6">
                                Created at
                            </TableColumn>
                            <TableColumn className="w-1/6">
                                Blocked at
                            </TableColumn>
                            <TableColumn className="w-1/6">Actions</TableColumn>
                        </TableRow>
                    </thead>
                    <tbody>
                        {data.data.map((user) => (
                            <UserItem key={user.id} user={user} />
                        ))}
                    </tbody>
                </table>
                <ul className="flex items-center justify-between mt-5">
                    {data.links.prev && (
                        <li>
                            <NavLink
                                isActive={data.links.prev !== null}
                                href={data.links.prev}
                            >
                                <Icon icon="material-symbols:arrow-back-rounded" />
                                Previous page
                            </NavLink>
                        </li>
                    )}
                    {data.links.next && (
                        <li className="ml-auto">
                            <NavLink
                                isActive={data.links.next !== null}
                                href={data.links.next}
                            >
                                <Icon icon="material-symbols:arrow-forward-rounded" />
                                Next page
                            </NavLink>
                        </li>
                    )}
                </ul>
            </SectionWrapper>
        </>
    );
}

Index.layout = (page: ReactNode) => <AdminLayout children={page} />;

export default Index;
