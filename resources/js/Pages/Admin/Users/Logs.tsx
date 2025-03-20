import TableColumn from "@/Components/Admin/TableColumn";
import TableRow from "@/Components/Admin/TableRow";
import AuthLogItem from "@/Components/Admin/Users/AuthLogItem";
import OutlineButton from "@/Components/OutlineButton";
import SectionWrapper from "@/Components/SectionWrapper";
import AdminLayout from "@/Layouts/AdminLayout";
import { AuthenticateUserData } from "@/types";
import { UserAuthLog } from "@/types/Admin/User";
import { Link, router, usePage } from "@inertiajs/react";
import { ReactNode } from "react";

function Logs({ logs }: { logs: UserAuthLog[] }) {
    const authUser: AuthenticateUserData = usePage().props?.auth?.user;

    const handleBackButton = () => {
        const user = route().routeParams.user;

        router.visit(route("admin.users.edit", user));
    };

    return (
        <>
            <SectionWrapper>
                <OutlineButton
                    className="rounded-xl"
                    disabled={false}
                    onClick={handleBackButton}
                >
                    Back
                </OutlineButton>
                <table className="w-full mt-4 border-collapse table-fixed">
                    <thead>
                        <TableRow className="!border-b-0">
                            <TableColumn className="hidden w-1/5 md:table-cell">
                                IP Address
                            </TableColumn>
                            <TableColumn className="w-1/3">
                                Action at
                            </TableColumn>
                            <TableColumn className="w-1/5">
                                Action status
                            </TableColumn>
                        </TableRow>
                    </thead>
                    <tbody>
                        {logs.map((log) => (
                            <AuthLogItem key={log.id} log={log} />
                        ))}
                    </tbody>
                </table>
            </SectionWrapper>
        </>
    );
}
Logs.layout = (page: ReactNode) => <AdminLayout children={page} />;

export default Logs;
