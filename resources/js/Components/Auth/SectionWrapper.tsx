export default function SectionWrapper({ children, className }) {
    return (
        <div
            className={`md:w-full lg:w-1/2 bg-dark-900 rounded-xl ` + className}
        >
            {children}
        </div>
    );
}
