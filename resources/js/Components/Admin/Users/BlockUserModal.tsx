import ModalLayout from "@/Components/Common/ModalLayout";
import { DangerButton } from "@/Components/DangerButton";
import OutlineButton from "@/Components/OutlineButton";
import { useModalContext } from "@/hooks/useModalContext";
import { useForm } from "@inertiajs/react";

export function BlockUserModal({ id }: { id: number }) {
    const { setModal } = useModalContext();
    const { processing, post } = useForm();

    const handleClose = () => {
        setModal(null);
    };

    const handleBlock = () => {
        post(`/admin/users/${id}/block`, {
            onSuccess: () => {
                setModal(null);
            },
        });
    };

    return (
        <ModalLayout className="w-[400px] h-[200px] rounded-xl">
            <div className="flex flex-col gap-5">
                <p className="text-white">
                    Are you sure you want to block this user?
                </p>
                <div className="flex justify-end gap-5">
                    <OutlineButton
                        disabled={processing}
                        className="px-6 py-4 rounded-xl "
                        onClick={handleClose}
                    >
                        Cancel
                    </OutlineButton>
                    <DangerButton disabled={processing} onClick={handleBlock}>
                        Block
                    </DangerButton>
                </div>
            </div>
        </ModalLayout>
    );
}
