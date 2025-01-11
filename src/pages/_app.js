import Footer from '@/components/footer';
import Navbar from '@/components/navbar/navbar';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
