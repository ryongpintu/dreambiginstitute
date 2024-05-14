import type { GetStaticProps, NextPage } from "next";
import SEO from "@components/seo/page-seo";
import Layout01 from "@layout/layout-01";
import Breadcrumb from "@components/breadcrumb";
import BecomeInstructor from "@containers/become-instructor";

interface PageContent {
    section: string;
}

type TProps = {
    data: {
        page: {
            content: PageContent[];
        };
    };
};

type PageProps = NextPage<TProps> & {
    Layout: typeof Layout01;
};

const BecomeTeacher: PageProps = () => {
    return (
        <>
            <SEO title="Become a teacher" />
            <Breadcrumb
                pages={[{ path: "/", label: "home" }]}
                currentPage="Become a Teacher"
                showTitle={false}
            />
            <BecomeInstructor />
        </>
    );
};

BecomeTeacher.Layout = Layout01;

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            layout: {
                headerShadow: true,
                headerFluid: false,
                footerMode: "light",
            },
        },
    };
};

export default BecomeTeacher;
