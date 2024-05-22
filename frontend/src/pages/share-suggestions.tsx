import type { GetStaticProps, NextPage } from "next";
import SEO from "@components/seo/page-seo";
import Layout01 from "@layout/layout-01";
import Breadcrumb from "@components/breadcrumb";
import SuggestionForm from "@containers/suggestion-form";

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

const Suggestions: PageProps = () => {
    return (
        <>
            <SEO title="Suggestions" />
            <Breadcrumb
                pages={[{ path: "/", label: "home" }]}
                currentPage="Suggestions"
                showTitle={false}
            />
            <SuggestionForm />
        </>
    );
};

Suggestions.Layout = Layout01;

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

export default Suggestions;
