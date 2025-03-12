import { ReactNode } from "react";
import SectionWrapper from "../SectionWrapper";

export function LeftSectionLayout({ children }: { children: ReactNode }) {
    return (
        <SectionWrapper className="flex flex-col gap-5 sm:flex-row lg:flex-col lg:w-1/3 grow">
            {children}
        </SectionWrapper>
    );
}
