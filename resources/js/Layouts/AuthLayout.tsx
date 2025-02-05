import ApplicationLogo from "@/Components/ApplicationLogo";
import SectionWrapper from "@/Components/Auth/SectionWrapper";

type props = {
    children: React.ReactNode;
};

export default function AuthLayout({ children }: props) {
    return (
        <div className="bg-dark-950 flex gap-4 p-7 sm:h-screen max-sm:grid">
            <SectionWrapper className="bg-dark-900 rounded-xl px-8 py-6 md:px-16 md:py-10 flex flex-col">
                <ApplicationLogo />
                <h1 className="text-white leading-[32px] text-3xl sm:leading-[60px] sm:text-6xl font-bold mt-10 mb-5 sm:mt-[107px] sm:mb-10">
                    Expand your mind, reading{" "}
                    <span className="text-dark-100">a book</span>
                </h1>
                {children}
            </SectionWrapper>
            <SectionWrapper className="items-center justify-center lg:items-end max-sm:flex hidden lg:flex">
                <img
                    className="w-[255px] pt-5 lg:w-auto"
                    src="/images/auth-phone.png"
                />
            </SectionWrapper>
        </div>
    );
}
