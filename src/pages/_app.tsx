import Sidebar from "@/Components/Sidebar";
import { AuthenticationProvider } from "@/provider/AuthenticationContext";
import { NotificationModalProvider } from "@/provider/NotificationContext";
import { HashProvider } from "@/provider/HashContext";
import "@/styles/globals.css";
import theme from "@/theme/theme";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <NotificationModalProvider>
        <AuthenticationProvider>
          <HashProvider>
            <Component {...pageProps} />
          </HashProvider>
        </AuthenticationProvider>
      </NotificationModalProvider>
    </ThemeProvider>
  );
}
