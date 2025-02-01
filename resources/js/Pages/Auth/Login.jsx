import ButtonWrapper from "@/Components/Auth/ButtonWrapper";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import InputWrapper from "@/Components/InputWrapper";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthLayout from "@/Layouts/AuthLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

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
                <div>
                    <InputWrapper labelValue={"Email: "}>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                    </InputWrapper>

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputWrapper labelValue={"Password: "}>
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                    </InputWrapper>

                    <InputError message={errors.password} className="mt-2" />
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
