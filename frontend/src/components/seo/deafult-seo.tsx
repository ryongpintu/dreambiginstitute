import { DefaultSeo } from "next-seo";
import siteConfig from "@data/site-config";

const SEO = () => {
    return (
        <DefaultSeo
            title={siteConfig.name}
            titleTemplate={`%s - ${siteConfig.titleTemplate}`}
            defaultTitle={siteConfig.name}
            description={siteConfig.description}
            canonical="https://idreambig.in/"
            openGraph={{
                type: "website",
                locale: "en_IE",
                site_name: siteConfig.name,
                images: [
                    {
                        url: "https://idreambig.in/images/about/about-me/about-me-popup-video-poster.jpg",
                        width: 800,
                        height: 600,
                        alt: "Og Image Alt",
                    },
                    {
                        url: "https://idreambig.in/images/about/about-me/about-me-popup-video-poster.jpg",
                        width: 900,
                        height: 800,
                        alt: "Og Image Alt Second",
                    },
                ],
            }}
            facebook={{
                appId: "61559781692203",
            }}
            additionalMetaTags={[
                {
                    name: "viewport",
                    content:
                        "width=device-width, initial-scale=1 maximum-scale=1",
                },
                {
                    name: "apple-mobile-web-app-capable",
                    content: "yes",
                },
                {
                    name: "theme-color",
                    content: "#ffffff",
                },
            ]}
            additionalLinkTags={[
                {
                    rel: "apple-touch-icon",
                    href: "/icons/icon-192x192.png",
                },
                {
                    rel: "manifest",
                    href: "/manifest.json",
                },
            ]}
        />
    );
};
export default SEO;
