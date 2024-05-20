/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        const pageProps = this.props?.__NEXT_DATA__?.props?.pageProps;

        return (
            <Html lang="en">
                <Head />
                <body className={pageProps.className}>
                    <Main />
                    <div id="portal" />
                    <NextScript />
                    <noscript
                        dangerouslySetInnerHTML={{
                            __html: `< src="https://www.googletagmanager.com/ns.html?id=GTM-MVT3ZVC4"
height="0" width="0" style="display:none;visibility:hidden"/>`,
                        }}
                    />
                </body>
            </Html>
        );
    }
}
