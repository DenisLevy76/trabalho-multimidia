import { NextUIProvider, createTheme } from '@nextui-org/react';
import { Footer } from '../components/Footer';
import { NavbarComponent } from '../components/Navbar';

const darkTheme = createTheme({
  type: 'dark', // it could be "light" or "dark"
});

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={darkTheme}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          minWidth: '100%',
        }}
      >
        <NavbarComponent />
        <Component {...pageProps} />
        <Footer />
      </div>
    </NextUIProvider>
  );
}

export default MyApp;
