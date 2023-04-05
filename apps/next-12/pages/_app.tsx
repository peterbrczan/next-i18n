import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/header/header";
import { ThemeProvider } from "@mui/material";
import { appTheme } from "../theme/theme";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={appTheme}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
