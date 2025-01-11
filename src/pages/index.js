import Hero from '@/components/hero';
import AboutFreshHarvest from '@/components/hero/AboutFreshHarvest';
import Blog from '@/components/hero/Blog';
import CustomerSay from '@/components/hero/CustomerSay';
import SpecialOffer from '@/components/hero/SpecialOffer';
import Product from '@/components/product';

export default function Home() {
  return (
    <>
      <Hero />
      <Product />
      <AboutFreshHarvest />
      <SpecialOffer />
      <CustomerSay />
      <Blog />
    </>
  );
}
