import { NotificationModalProvider } from "@/provider/NotificationContext";
import "@/styles/globals.css";
import theme from "@/theme/theme";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <NotificationModalProvider>
        <Component {...pageProps} />
      </NotificationModalProvider>
    </ThemeProvider>
  );
}
