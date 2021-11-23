import { ThemeProvider } from "@chakra-ui/system";

import { ProvideAuth } from "../lib/auth";
import customTeam from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <ThemeProvider theme={customTeam}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ProvideAuth>
  );
}

export default MyApp;
