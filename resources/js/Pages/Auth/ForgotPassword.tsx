import InputField from "@/Components/Auth/InputField";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthLayout from "@/Layouts/AuthLayout";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <AuthLayout>
            <Head title="Forgot Password" />

            <div className="mb-4 text-sm text-gray-600">
                Forgot your password? No problem. Just let us know your email
                address and we will email you a password reset link that will
                allow you to choose a new one.
            </div>

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <InputField
                    id="email"
                    label="Email: "
                    type="email"
                    error={errors.email}
                    data={data.email}
                    setData={setData}
                />

                <div className="mt-4 flex items-center justify-end">
                    <PrimaryButton
                        className="text-sm py-3 px-[29px] md:px-[54px] rounded-[30px] md:py-4 md:text-xl md:leading-[20px] max-sm:justify-center max-sm:w-full"
                        disabled={processing}
                    >
                        Email Password Reset Link
                    </PrimaryButton>
                </div>
            </form>
        </AuthLayout>
    );
}
