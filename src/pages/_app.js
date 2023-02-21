import '@/styles/globals.css';
import { IBM_Plex_Sans_Hebrew } from '@next/font/google';

const hebrew = IBM_Plex_Sans_Hebrew({
  subsets: ['latin'],
  weight: ['100', '300', '500', '700'],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={hebrew.className}>
      <Component {...pageProps} />
    </main>
  );
}
