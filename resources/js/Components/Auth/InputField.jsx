import { Icon } from "@iconify/react";
import TextInput from "../TextInput";
import InputError from "../InputError";
import { useEffect, useRef, useState } from "react";
import InputLabel from "../InputLabel";

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
    const [padding, setPadding] = useState(0);
    const labelRef = useRef(null);

    useEffect(() => {
        if (labelRef.current) {
            const labelWidth = labelRef.current.offsetWidth;
            setPadding(labelWidth + 15);
        }
    }, []);

    return (
        <div>
            <div className="relative">
                <InputLabel
                    className="absolute left-3 text-dark-700 top-1/2 -translate-y-1/2"
                    value={label}
                    ref={labelRef}
                />
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
                    style={{
                        paddingLeft: `${padding}px`,
                    }}
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
            </div>
            <InputError message={error} className="mt-2" />
        </div>
    );
}
