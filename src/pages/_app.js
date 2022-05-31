import Theme from '../styles/theme';
import '../styles/globals.css'
 import 'tailwindcss/tailwind.css'
export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 