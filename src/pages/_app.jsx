import { Inter } from 'next/font/google';
import '../assets/styles/global.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${inter.className} min-h-screen`}>
      <Component {...pageProps} />
    </div>
  );
}
