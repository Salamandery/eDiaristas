import "@styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import Head from "next/head";
import PageHeader from "ui/components/surfaces/Header";
import theme from "ui/themes/themes";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                {/* eslint-disable @next/next/no-css-tags */}
                <link
                    href="/fonts/tw-icons/css/treinaweb-icons.css"
                    rel="stylesheet"
                />
                <title>E-DIARISTAS</title>
            </Head>
            <ThemeProvider theme={theme}>
                <PageHeader />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
export default MyApp;
