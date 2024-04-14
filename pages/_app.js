import { ThemeProvider } from "next-themes";
import { fuchsia } from "tailwindcss/colors";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
