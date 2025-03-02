import { DangerButton } from "@/Components/DangerButton";
import OutlineButton from "@/Components/OutlineButton";
import { useModalContext } from "@/hooks/useModalContext";
import { BookType } from "@/types/Book/Book";
import { DeleteBookModal } from "../DeleteBookModal";
import { router } from "@inertiajs/react";
import TableColumn from "../TableColumn";
import TableRow from "../TableRow";
import { AuthenticateUserData } from "@/types";
import { BlockUserModal } from "./BlockUserModal";
import { UnblockUserModal } from "./UnblockUserModal";
import { SuccessButton } from "@/Components/SuccessButton";

export default function UserItem({ user }: { user: AuthenticateUserData }) {
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
            <TableColumn className="w-1/12">{user.id}</TableColumn>
            <TableColumn className="w-1/6">{user.name}</TableColumn>
            <TableColumn className="w-1/6">{user.email}</TableColumn>
            <TableColumn className="w-1/6">
                {new Date(user.created_at).toLocaleString("en-UK")}
            </TableColumn>
            <TableColumn className="w-1/6">
                {user.blocked_at
                    ? new Date(user.blocked_at).toLocaleString("en-UK")
                    : "-"}
            </TableColumn>
            <TableColumn className="flex w-1/6 gap-3">
                <OutlineButton
                    onClick={handleUpdate}
                    disabled={false}
                    className="rounded-xl"
                >
                    Update
                </OutlineButton>
                {user.blocked_at === null ? (
                    <DangerButton disabled={false} onClick={handleBlock}>
                        Block
                    </DangerButton>
                ) : (
                    <SuccessButton disabled={false} onClick={handleUnblock}>
                        Unblock
                    </SuccessButton>
                )}
            </TableColumn>
        </TableRow>
    );
}
