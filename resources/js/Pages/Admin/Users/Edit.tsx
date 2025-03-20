import TableColumn from "@/Components/Admin/TableColumn";
import TableRow from "@/Components/Admin/TableRow";
import AuthLogItem from "@/Components/Admin/Users/AuthLogItem";
import { BlockUserModal } from "@/Components/Admin/Users/BlockUserModal";
import { UnblockUserModal } from "@/Components/Admin/Users/UnblockUserModal";
import InputField from "@/Components/Auth/InputField";
import { DangerButton } from "@/Components/DangerButton";
import OutlineButton from "@/Components/OutlineButton";
import SectionWrapper from "@/Components/SectionWrapper";
import { SuccessButton } from "@/Components/SuccessButton";
import Title from "@/Components/Title";
import { useModalContext } from "@/hooks/useModalContext";
import AdminLayout from "@/Layouts/AdminLayout";
import { AuthenticateUserData } from "@/types";
import { UserAuthLog } from "@/types/Admin/User";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { FormEvent, ReactNode } from "react";

function Edit({
    user,
    userAuthLogs,
}: {
    user: AuthenticateUserData;
    userAuthLogs: UserAuthLog[];
}) {
    const authUser: AuthenticateUserData = usePage().props?.auth?.user;
    const { setModal } = useModalContext();
    const { setData, data, patch, processing, errors } = useForm({
        name: user.name,
        email: user.email,
    });

    const handleBlock = () => {
        setModal(<BlockUserModal id={user.id} />);
    };

    const handleUnblock = () => {
        setModal(<UnblockUserModal id={user.id} />);
    };

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        patch(route("admin.users.update", user.id));
    };

    return (
        <>
            <Head title={user.name} />
            <SectionWrapper>
                <form onSubmit={submit} className="grid grid-cols-2 gap-4">
                    <InputField
                        id="name"
                        label="Name: "
                        type="text"
                        data={data.name}
                        setData={setData}
                        error={errors.name}
                    />
                    <InputField
                        id="email"
                        label="Email: "
                        type="text"
                        data={data.email}
                        setData={setData}
                        error={errors.email}
                    />
                    <OutlineButton
                        disabled={processing}
                        className="mt-4 max-w-[130px] col-start-1 col-end-1"
                    >
                        Update
                    </OutlineButton>
                    <div className="mt-4">
                        {authUser.id !== user.id &&
                            (user.blocked_at ? (
                                <SuccessButton
                                    onClick={handleUnblock}
                                    disabled={false}
                                >
                                    Unblock
                                </SuccessButton>
                            ) : (
                                <DangerButton
                                    onClick={handleBlock}
                                    disabled={false}
                                >
                                    Block
                                </DangerButton>
                            ))}
                    </div>
                </form>
            </SectionWrapper>
            <SectionWrapper>
                <Title>User auth logs</Title>
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
                        {userAuthLogs.slice(0, 5).map((log) => (
                            <AuthLogItem key={log.id} log={log} />
                        ))}
                    </tbody>
                </table>
                <OutlineButton disabled={false} className="mt-4 rounded-xl">
                    <Link
                        href={route("admin.users.logs", user)}
                        disabled={false}
                    >
                        Read more logs
                    </Link>
                </OutlineButton>
            </SectionWrapper>
        </>
    );
}
Edit.layout = (page: ReactNode) => <AdminLayout children={page} />;

export default Edit;
