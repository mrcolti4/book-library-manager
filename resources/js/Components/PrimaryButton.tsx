export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center border border-transparent bg-white text-gray-900 font-bold capitalize tracking-widest transition duration-150 ease-in-out hover:bg-transparent hover:text-white hover:border-dark-800 active:bg-dark-900 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
