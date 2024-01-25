import React from "react";
// import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
const App = ({ Component, pageProps }: AppProps) => {
  return (
    // <ConfigProvider theme={AppTheme}>
    <Component {...pageProps} />
    // </ConfigProvider>
  );
};

export default App;
