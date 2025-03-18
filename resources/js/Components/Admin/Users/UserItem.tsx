import { DangerButton } from "@/Components/DangerButton";
import OutlineButton from "@/Components/OutlineButton";
import { useModalContext } from "@/hooks/useModalContext";
import { router, usePage } from "@inertiajs/react";
import TableColumn from "../TableColumn";
import TableRow from "../TableRow";
import { AuthenticateUserData } from "@/types";
import { BlockUserModal } from "./BlockUserModal";
import { UnblockUserModal } from "./UnblockUserModal";
import { SuccessButton } from "@/Components/SuccessButton";

export default function UserItem({ user }: { user: AuthenticateUserData }) {
    const authUser: AuthenticateUserData = usePage().props?.auth?.user;
    const { setModal } = useModalContext();
    const handleBlock = () => {
        setModal(<BlockUserModal id={user.id} />);
    };

    const handleUnblock = () => {
        setModal(<UnblockUserModal id={user.id} />);
    };

    const handleUpdate = () => {
        router.visit(route("admin.users.edit", user.id));
    };

    return (
        <TableRow className="transition hover:bg-dark-950">
            <TableColumn className="hidden w-1/12 md:table-cell">
                {user.id}
            </TableColumn>
            <TableColumn className="hidden w-1/6 md:table-cell">
                {user.name}
            </TableColumn>
            <TableColumn className="w-1/3 md:w-1/6">{user.email}</TableColumn>
            <TableColumn className="hidden w-1/6 lg:table-cell">
                {new Date(user.created_at).toLocaleString("en-UK")}
            </TableColumn>
            <TableColumn className="hidden w-1/6 lg:table-cell">
                {user.blocked_at
                    ? new Date(user.blocked_at).toLocaleString("en-UK")
                    : "-"}
            </TableColumn>
            <TableColumn className="flex w-3/6 gap-3 md:w-2/6">
                <OutlineButton
                    onClick={handleUpdate}
                    disabled={false}
                    className="rounded-xl"
                >
                    Update
                </OutlineButton>
                {user.id !== authUser.id &&
                    (user.blocked_at === null ? (
                        <DangerButton
                            className="hidden md:block"
                            disabled={false}
                            onClick={handleBlock}
                        >
                            Block
                        </DangerButton>
                    ) : (
                        <SuccessButton
                            className="hidden md:block"
                            disabled={false}
                            onClick={handleUnblock}
                        >
                            Unblock
                        </SuccessButton>
                    ))}
            </TableColumn>
        </TableRow>
    );
}
