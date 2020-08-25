import { GlobalStyles } from "../GlobalStyles";
import React, { useLayoutEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "../themes";
import { defaultTheme } from "../themes/defaultTheme";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(defaultTheme);

  useLayoutEffect(
    function loadTheme() {
      const theme = window.localStorage.getItem("theme");
      setTheme(themes[theme] || defaultTheme);
    },
    [Component]
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
