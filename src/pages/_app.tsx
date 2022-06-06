import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from '../styles/global';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Next Boilerplate</title>
        <link rel="shortcut icon" href="/img/atom-icon.svg" />
        <link rel="apple-touch-icon" href="/img/atom-icon.svg" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
