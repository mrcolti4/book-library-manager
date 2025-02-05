type props = {
    children: React.ReactNode;
};

export default function ButtonWrapper({ children }: props) {
    return (
        <div className="mt-4 sm:mt-20 md:mt-auto flex flex-wrap items-center gap-5 max-sm:flex-col max-sm:w-full">
            {children}
        </div>
    );
}
