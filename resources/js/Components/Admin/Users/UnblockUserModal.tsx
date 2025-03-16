import ModalLayout from "@/Components/Common/ModalLayout";
import { DangerButton } from "@/Components/DangerButton";
import OutlineButton from "@/Components/OutlineButton";
import { SuccessButton } from "@/Components/SuccessButton";
import { useModalContext } from "@/hooks/useModalContext";
import { useForm } from "@inertiajs/react";

export function UnblockUserModal({ id }: { id: number }) {
    const { setModal } = useModalContext();
    const { processing, post } = useForm();

    const handleClose = () => {
        setModal(null);
    };

    const handleUnblock = () => {
        post(`/admin/users/${id}/unblock`, {
            onSuccess: () => {
                setModal(null);
            },
        });
    };

    return (
        <ModalLayout className="w-[400px] h-[200px] rounded-xl">
            <div className="flex flex-col gap-5">
                <p className="text-white">
                    Are you sure you want to unblock this user?
                </p>
                <div className="flex justify-end gap-5">
                    <OutlineButton
                        disabled={processing}
                        className="px-6 py-4 rounded-xl "
                        onClick={handleClose}
                    >
                        Cancel
                    </OutlineButton>
                    <SuccessButton disabled={false} onClick={handleUnblock}>
                        Unblock
                    </SuccessButton>
                </div>
            </div>
        </ModalLayout>
    );
}
