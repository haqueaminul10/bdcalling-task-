import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../../public/assets/Logo.png';
import Link from 'next/link';
import CartIcon from '@/icon/cart';
import FavoriteIcon from '@/icon/favouriteIcon';
import SignIn from '../auth/index';
import { useRouter } from 'next/router';
import { menu } from '../../../data';
import Cart from '../cart';
import { useCart } from '@/pages/api/CartContext';

const Navbar = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { cart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      style={{ backdropFilter: isScrolled ? 'none' : '' }}
    >
      <div className='grid grid-cols-3 mx-32 py-4'>
        <section className='flex items-center gap-2'>
          <div>
            <Image
              src={logo}
              width={40}
              height={40}
              alt='Fresh Harvests Logo'
            />
          </div>
          <h1 className='text-2xl font-bold'>Fresh Harvests</h1>
        </section>

        <section className='flex items-center gap-4 justify-center'>
          {menu.length > 0 &&
            menu.map((item, index) => (
              <div
                key={index}
                className={`border-b-[3px] transition-all duration-300 ${
                  router.pathname === item.route
                    ? 'border-green-600'
                    : 'border-transparent hover:border-green-600'
                }`}
              >
                <Link href={item.route}>{item.name}</Link>
              </div>
            ))}
        </section>

        <section className='flex items-center gap-3 justify-end'>
          <div className='flex items-center'>
            <FavoriteIcon size='24' />
            <span>Favourite</span>
          </div>

          <div
            className='flex items-center relative'
            onMouseEnter={() => setIsDropdownVisible(true)}
            onMouseLeave={() => setIsDropdownVisible(false)}
          >
            <div className='relative'>
              <CartIcon size='24' />
              {cart.length > 0 && (
                <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                  {cart.length}
                </span>
              )}
            </div>
            <span>Cart</span>
            {isDropdownVisible && (
              <div className='absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg'>
                <Cart />
              </div>
            )}
          </div>

          <div>
            <SignIn />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
