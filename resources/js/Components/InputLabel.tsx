import { ForwardedRef, forwardRef, ReactNode, RefObject } from "react";

type Props = {
    value: string;
    className: string;
    children?: ReactNode;
};

export default forwardRef(function InputLabel(
    { value, className = "", children, ...props }: Props,
    ref: ForwardedRef<HTMLLabelElement>,
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
