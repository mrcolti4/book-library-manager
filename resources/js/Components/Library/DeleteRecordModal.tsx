import { useForm } from "@inertiajs/react";
import OutlineButton from "../OutlineButton";
import ModalLayout from "../Common/ModalLayout";
import { DangerButton } from "../DangerButton";
import { useModalContext } from "@/hooks/useModalContext";

export default function DeleteRecordModal({ id }: { id: number }) {
    const { setModal } = useModalContext();
    const { processing, delete: destroy } = useForm();

    const handleClose = () => {
        setModal(null);
    };

    const handleDelete = () => {
        destroy(`/record/${id}/destroy`, {
            onSuccess: () => {
                setModal(null);
            },
        });
    };

    return (
        <ModalLayout className="w-[400px] h-[200px] rounded-xl">
            <div className="flex flex-col gap-5">
                <p className="text-white">
                    Are you sure you want to delete this record?
                </p>
                <div className="flex justify-end gap-5">
                    <OutlineButton
                        disabled={processing}
                        className="px-6 py-4 rounded-xl "
                        onClick={handleClose}
                    >
                        Cancel
                    </OutlineButton>
                    <DangerButton disabled={processing} onClick={handleDelete}>
                        Delete
                    </DangerButton>
                </div>
            </div>
        </ModalLayout>
    );
}
