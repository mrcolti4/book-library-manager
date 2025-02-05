type props = {
    children: React.ReactNode;
    className?: string;
};

export default function SectionWrapper({ children, className }: props) {
    return (
        <div className={`w-full p-5 bg-dark-900 rounded-xl ` + className}>
            {children}
        </div>
    );
}
