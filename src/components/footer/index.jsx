import logo from '../../../public/assets/Logo.png';
import GmailIcon from '@/icon/gmailIcon';
import LocationIcon from '@/icon/locationIcon';
import PhoneIcon from '@/icon/phoneIcone';
import Image from 'next/image';
import visa from '../../../public/assets/Visa.png';
import apay from '../../../public/assets/ApplePay.png';
import paypal from '../../../public/assets/Paypal.png';
import appStore from '../../../public/assets/appstore.png';
import gplay from '../../../public/assets/googleplay.png';
const Footer = () => {
  return (
    <div className='bg-[#f4f6f6] '>
      <div className='flex items-start justify-between mx-32 mt-20 py-12'>
        <section>
          <div>
            <div className=' flex items-center '>
              <div>
                {' '}
                <Image src={logo} alt='' height={14} width={24} />
              </div>

              <h3 className='text-[26px] font-semibold'> Fresh Harvests</h3>
            </div>
          </div>
          <p className='mt-6'>Download App</p>
          <div className='my-4 flex gap-2'>
            <Image src={appStore} alt='' height={40} width={138} />
            <Image src={gplay} alt='' height={40} width={138} />
          </div>
        </section>
        <section>
          <h3 className='font-semibold'>Quick Link</h3>
          <ul>
            <li className='text-sm font-normal'>Home</li>
            <li className='text-sm font-normal'>Shop</li>
            <li className='text-sm font-normal'>About Us</li>
            <li className='text-sm font-normal'>Detail Blog</li>
          </ul>
        </section>
        <section>
          <h3 className='font-semibold'>Quick Link 2</h3>
          <ul>
            <li className='text-sm font-normal'>Favourite</li>
            <li className='text-sm font-normal'>Cart</li>
            <li className='text-sm font-normal'>Sign In</li>
            <li className='text-sm font-normal'>Register</li>
          </ul>
        </section>
        <section>
          <h3 className='font-semibold'>Contact us</h3>
          <ul>
            <li className='text-sm font-normal flex items-center gap-1'>
              {' '}
              <PhoneIcon size={16} color='gray' /> 12314533245
            </li>
            <li className='text-sm font-normal flex items-center gap-1'>
              {' '}
              <GmailIcon size={16} color='gray' /> Fassiong_fsd@gmail.com
            </li>

            <li className='text-sm font-normal flex items-center gap-1'>
              {' '}
              <LocationIcon size={16} color='gray' />
              Bansre,Dhaka-1208
            </li>
          </ul>
          <div className='my-2'>Accepted Payment Method</div>
          <section className='flex items-center gap-1'>
            <div>
              <Image src={visa} height={30} width={60} />
            </div>
            <div>
              {' '}
              <Image src={apay} height={30} width={60} />
            </div>
            <div>
              {' '}
              <Image src={paypal} height={30} width={60} />
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Footer;
