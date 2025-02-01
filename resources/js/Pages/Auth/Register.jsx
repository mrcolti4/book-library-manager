import ButtonWrapper from "@/Components/Auth/ButtonWrapper";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import InputWrapper from "@/Components/InputWrapper";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthLayout from "@/Layouts/AuthLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <AuthLayout>
            <Head title="Register" />

            <form className="flex flex-col grow" onSubmit={submit}>
                <div>
                    <InputWrapper labelValue={"Name: "}>
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />
                    </InputWrapper>
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputWrapper labelValue={"Email: "}>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData("email", e.target.value)}
                            required
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
                            autoComplete="username"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            required
                        />
                    </InputWrapper>

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <ButtonWrapper>
                    <PrimaryButton
                        className="ms-4 text-sm py-3 px-[29px] bg-white md:px-[54px] rounded-[30px] text-gray-900 md:py-4 md:text-xl md:leading-[20px]"
                        disabled={processing}
                    >
                        Registration
                    </PrimaryButton>
                    <Link
                        href={route("login")}
                        className="text-dark-700 underline transition hover:text-white max-sm:text-sm"
                    >
                        Already registered?
                    </Link>
                </ButtonWrapper>
            </form>
        </AuthLayout>
    );
}
