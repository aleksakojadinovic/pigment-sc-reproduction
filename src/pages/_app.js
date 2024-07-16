import "@pigment-css/react/styles.css";
import { ThemeProvider } from "styled-components";

const scTheme = {
  colors: {
    primary: "#9542f5",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={scTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
