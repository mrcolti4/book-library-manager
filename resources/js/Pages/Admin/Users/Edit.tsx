import { BlockUserModal } from "@/Components/Admin/Users/BlockUserModal";
import { UnblockUserModal } from "@/Components/Admin/Users/UnblockUserModal";
import InputField from "@/Components/Auth/InputField";
import { DangerButton } from "@/Components/DangerButton";
import OutlineButton from "@/Components/OutlineButton";
import SectionWrapper from "@/Components/SectionWrapper";
import { SuccessButton } from "@/Components/SuccessButton";
import { useModalContext } from "@/hooks/useModalContext";
import AdminLayout from "@/Layouts/AdminLayout";
import { AuthenticateUserData } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { FormEvent, ReactNode } from "react";

function Edit({ user }: { user: AuthenticateUserData }) {
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
                        {user.blocked_at ? (
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
                        )}
                    </div>
                </form>
            </SectionWrapper>
        </>
    );
}
Edit.layout = (page: ReactNode) => <AdminLayout children={page} />;

export default Edit;
