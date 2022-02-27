import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app'
import { Navbar } from '../components/navigation/Navbar';

function MyApp({ Component, pageProps }: AppProps) {

  const darkTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });
  
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
  );
}

export default MyApp