import ButtonWrapper from "@/Components/Auth/ButtonWrapper";
import InputField from "@/Components/Auth/InputField";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthLayout from "@/Layouts/AuthLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEvent, useState } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const [showPassword, setShowPassword] = useState(false);

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <AuthLayout>
            <Head title="Register" />

            <form className="flex flex-col grow" onSubmit={submit}>
                <div className="grid gap-4">
                    <InputField
                        id="name"
                        label="Name: "
                        type="text"
                        error={errors.name}
                        data={data.name}
                        setData={setData}
                    />

                    <InputField
                        id="email"
                        label="Email: "
                        type="email"
                        error={errors.email}
                        data={data.email}
                        setData={setData}
                    />

                    <InputField
                        id="password"
                        label="Password: "
                        type={showPassword ? "text" : "password"}
                        error={errors.password}
                        data={data.password}
                        setData={setData}
                    >
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            <Icon
                                icon={
                                    showPassword
                                        ? "pajamas:eye"
                                        : "pajamas:eye-slash"
                                }
                                color="white"
                                width="20"
                                height="20"
                            />
                        </button>
                    </InputField>
                </div>
                <ButtonWrapper>
                    <PrimaryButton
                        className="text-sm py-3 px-[29px] md:px-[54px] rounded-[30px] text-gray-900 md:py-4 md:text-xl md:leading-[20px] max-sm:justify-center max-sm:w-full"
                        disabled={processing}
                    >
                        Registration
                    </PrimaryButton>
                    <Link
                        href={route("login")}
                        className="underline transition text-dark-700 hover:text-white max-sm:text-sm"
                    >
                        Already registered?
                    </Link>
                </ButtonWrapper>
            </form>
        </AuthLayout>
    );
}
