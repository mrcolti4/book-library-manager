import clsx from "clsx";
import {
    ChangeEvent,
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
} from "react";

type Props = {
    id?: string;
    name?: string;
    value?: string | number | File | null;
    type: "text" | "password" | "email" | "number" | "file";
    error?: string;
    className: string;
    autoComplete?: string;
    isFocused?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    style?: React.CSSProperties;
};

type InputHandler = {
    focus: () => void;
};

export default forwardRef<InputHandler, Props>(function TextInput(
    { type = "text", className = "", isFocused = false, error = "", ...props },
    ref
) {
    const localRef = useRef<HTMLInputElement | null>(null);
    const classes = clsx(
        "rounded-md border focus:border-white focus:ring-white bg-dark-800 text-white",
        { "border-none": error === "" },
        className,
        {
            "border border-red focus:border-red focus:ring-red": error !== "",
        }
    );

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return <input {...props} type={type} className={classes} ref={localRef} />;
});
