import ButtonWrapper from "@/Components/Auth/ButtonWrapper";
import InputField from "@/Components/Auth/InputField";
import Checkbox from "@/Components/Checkbox";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthLayout from "@/Layouts/AuthLayout";
import { Icon } from "@iconify/react";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });
    const [showPassword, setShowPassword] = useState(false);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <AuthLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form className="flex flex-col grow" onSubmit={submit}>
                <div class="grid gap-4">
                    <InputField
                        id="email"
                        label="Email: "
                        type="text"
                        error={errors.email}
                        data={data.email}
                        setData={setData}
                    />

                    <InputField
                        id="password"
                        label="Password "
                        type={showPassword ? "text" : "password"}
                        error={errors.password}
                        data={data.password}
                        setData={setData}
                        isPassword={true}
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                    />
                </div>

                <ButtonWrapper>
                    <PrimaryButton
                        className="ms-4 text-sm py-3 px-[29px] md:px-[54px] rounded-[30px] md:py-4 md:text-xl md:leading-[20px]"
                        disabled={processing}
                    >
                        Log in
                    </PrimaryButton>

                    <Link
                        href={route("register")}
                        className="text-dark-700 underline transition hover:text-white max-sm:text-sm"
                    >
                        Don’t have an account?
                    </Link>
                </ButtonWrapper>
            </form>
        </AuthLayout>
    );
}
