import clsx from "clsx";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, error = "", ...props },
    ref,
) {
    const localRef = useRef(null);
    const classes = clsx(
        "rounded-md border focus:border-white focus:ring-white bg-dark-800 text-white",
        { "border-none": error === "" },
        className,
        { "border border-red focus:border-red focus:ring-red": error !== "" },
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
