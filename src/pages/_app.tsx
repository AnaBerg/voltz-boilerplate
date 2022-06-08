import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from '../styles/global';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Voltz Boilerplate</title>
        <link rel="shortcut icon" href="/images/voltz-icon.svg" />
        <link rel="apple-touch-icon" href="/images/voltz-icon.svg" />
        <link rel="stylesheet" href="fonts.css" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
