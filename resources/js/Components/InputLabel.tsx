import { forwardRef } from "react";

export default forwardRef(function InputLabel(
    { value, className = "", children, ...props },
    ref,
) {
    return (
        <label
            {...props}
            className={`block text-sm font-medium text-gray-700 ` + className}
            ref={ref}
        >
            {value ? value : children}
        </label>
    );
});
