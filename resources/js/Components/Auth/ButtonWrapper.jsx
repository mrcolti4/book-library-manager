export default function ButtonWrapper({ children }) {
    return (
        <div className="mt-4 sm:mt-20 md:mt-auto flex items-center gap-5">
            {children}
        </div>
    );
}
