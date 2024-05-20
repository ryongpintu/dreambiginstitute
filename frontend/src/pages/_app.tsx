import { ElementType, useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import SEO from "@components/seo/deafult-seo";
import FallbackLayout from "@layout/fallback";
import "@assets/css/font-awesome.min.css";
import "@assets/css/font-linea.css";
import "@assets/css/fonts.css";
import "@assets/css/tailwind.css";
import "@assets/css/swiper.css";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import { UIProvider } from "../contexts/ui-context";
import { UserProvider } from "../contexts/user-context";

interface CustomAppProps extends Omit<AppProps, "Component"> {
    Component: AppProps["Component"] & { Layout: ElementType };
    pageProps: {
        [key: string]: unknown;
    };
}

const MyApp = ({ Component, pageProps }: CustomAppProps) => {
    const router = useRouter();
    const Layout = Component.Layout || FallbackLayout;
    const layoutProps =
        typeof pageProps.layout === "object" ? pageProps.layout : {};

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        document.activeElement instanceof HTMLElement &&
            document.activeElement.blur();
    }, [router]);

    useEffect(() => {
        document.body.className = (pageProps.className as string) || "";
    });

    return (
        <UIProvider>
            <UserProvider>
                <Layout {...layoutProps}>
                    <Script
                        strategy="afterInteractive"
                        src="https://www.googletagmanager.com/gtag/js?id=G-6FG9FVXK93"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-6FG9FVXK93');
                        `}
                    </Script>

                    <SEO />
                    <Component {...pageProps} />
                    <Toaster />
                </Layout>
            </UserProvider>
        </UIProvider>
    );
};

export default MyApp;
