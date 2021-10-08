import "@styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import Head from "next/head";
import theme from "ui/themes/themes";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>E-DIARISTAS</title>
            </Head>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
export default MyApp;
