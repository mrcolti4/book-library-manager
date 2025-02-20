import { ForwardedRef, MouseEventHandler, ReactNode, forwardRef } from "react";

interface props {
    children: ReactNode;
    onClick: MouseEventHandler;
}

const SliderButton = forwardRef(function (
    { children, onClick }: props,
    ref: ForwardedRef<HTMLButtonElement>,
) {
    return (
        <button
            className="border-2 p-1 rounded-full border-dark-800 inline-flex justify-center items-center"
            onClick={onClick}
            ref={ref}
            disabled={false}
        >
            {children}
        </button>
    );
});

export default SliderButton;
