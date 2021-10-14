import "@styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { AppContainer } from "ui/styles/pages/styles";
import Head from "next/head";
import PageHeader from "ui/components/surfaces/Header";
import PageFooter from "@components/surfaces/Footer";
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
                <AppContainer>
                    <PageHeader />
                    <Component {...pageProps} />
                    <PageFooter />
                </AppContainer>
            </ThemeProvider>
        </>
    );
}
export default MyApp;
