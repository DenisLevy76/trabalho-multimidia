import { NextUIProvider, createTheme } from '@nextui-org/react';
import { NavbarComponent } from '../components/Navbar';

const darkTheme = createTheme({
  type: 'dark', // it could be "light" or "dark"
});

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NextUIProvider theme={darkTheme}>
        <NavbarComponent />
        <Component {...pageProps} />
      </NextUIProvider>
    </div>
  );
}

export default MyApp;
