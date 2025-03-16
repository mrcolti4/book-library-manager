import SectionWrapper from "@/Components/SectionWrapper";
import AdminLayout from "@/Layouts/AdminLayout";
import { ReactNode } from "react";

function Index() {
    return (
        <>
            <h1>Hello world</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                reprehenderit saepe deserunt suscipit architecto dolorem libero
                exercitationem minima placeat voluptas nobis, fuga hic eius
                laudantium maiores aperiam repellat ipsum delectus?
            </p>
        </>
    );
}

Index.layout = (page: ReactNode) => <AdminLayout children={page} />;

export default Index;
