import { Icon } from "@iconify/react";
import InputWrapper from "../InputWrapper";
import TextInput from "../TextInput";
import InputError from "../InputError";

export default function InputField({
    id,
    label,
    type,
    error,
    data,
    setData,
    isPassword = false,
    showPassword = false,
    setShowPassword = {},
}) {
    return (
        <div>
            <InputWrapper labelValue={label}>
                <TextInput
                    id={id}
                    name={name}
                    value={data}
                    type={type}
                    error={error}
                    className="mt-1 block w-full"
                    autoComplete={id}
                    isFocused={true}
                    onChange={(e) => setData(id, e.target.value)}
                    required
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-3 items-center justify-center">
                    {isPassword ? (
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
                    ) : null}
                    {error && (
                        <Icon
                            icon="pajamas:error"
                            color="red"
                            width="20"
                            height="20"
                        />
                    )}
                </div>
            </InputWrapper>
            <InputError message={error} className="mt-2" />
        </div>
    );
}
