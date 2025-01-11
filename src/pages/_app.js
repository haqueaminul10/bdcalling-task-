import Footer from '@/components/footer';
import Navbar from '@/components/navbar/navbar';
import '@/styles/globals.css';
import { CartProvider } from './api/CartContext';

export default function App({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </CartProvider>
    </>
  );
}
