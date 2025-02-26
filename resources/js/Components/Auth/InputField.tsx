import { Icon } from "@iconify/react";
import TextInput from "../TextInput";
import InputError from "../InputError";
import { ChangeEvent, ReactNode, useEffect, useRef, useState } from "react";
import InputLabel from "../InputLabel";

type Props = {
    id: string;
    label: string;
    type: "text" | "password" | "email";
    error?: string;
    data: string;
    setData: Function;
    isFocused?: boolean;
    children?: ReactNode;
};

export default function InputField({
    id,
    label,
    type,
    error = "",
    data,
    setData,
    isFocused = false,
    children,
}: Props) {
    const [padding, setPadding] = useState(0);
    const labelRef = useRef<HTMLLabelElement>(null);

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
                    name={id}
                    value={data}
                    type={type}
                    error={error}
                    className="mt-1 block w-full"
                    autoComplete={id}
                    isFocused={isFocused}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setData(id, e.target.value)
                    }
                    required
                    style={{
                        paddingLeft: `${padding}px`,
                    }}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-3 items-center justify-center">
                    {children}
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
