import Image from 'next/image';
import logo from '@/components/assets/Logo.png';
import Link from 'next/link';
import CartIcon from '@/icon/cart';
import FavoriteIcon from '@/icon/favouriteIcon';
import SignIn from '../auth/index';
import { useRouter } from 'next/router';
const Navbar = () => {
  const router = useRouter();
  const menu = [
    { name: 'Home', route: '/' },
    { name: 'Shop', route: '/shop' },
    { name: 'About us', route: '/aboutus' },
    { name: 'Blog', route: '/bog' },
  ];
  return (
    <>
      <div className='grid grid-cols-3 mx-32'>
        <section className='flex items-center gap-2'>
          <div>
            <Image
              src={logo}
              width={40}
              height={40}
              alt='Picture of the author'
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
          <div className='flex items-center '>
            <FavoriteIcon size='24' />
            <span>favourite</span>
          </div>
          <div className='flex items-center '>
            <CartIcon size='24' />
            <span>Cart</span>
          </div>
          <div>
            <SignIn />
          </div>
        </section>
      </div>
    </>
  );
};

export default Navbar;
