import { Button } from '../ui/button';
import Image from 'next/image';
import arrow from '../../../public/assets/heroArrow.png';
import baby from '../../../public/assets/baby.png';
import salad from '../../../public/assets/salad.png';
import leaf from '../../../public/assets/leaf.png';
import appStore from '../../../public/assets/appstore.png';
import gplay from '../../../public/assets/googleplay.png';

const Hero = () => {
  return (
    <div className='relative mb-12'>
      <div className='absolute top-[10%] left-[90%]'>
        <Image src={leaf} alt='' height={190} width={190} />
      </div>
      <div className='absolute top-[10%] left-[45%]'>
        <Image src={leaf} alt='' height={90} width={100} />
      </div>
      <div className='flex justify-between'>
        <section className='w-2/3 bg-[#efefef] px-32 py-20 '>
          <Button
            variant='outline '
            className='text-[#749b3f] border border-gray-400 hover:bg-gray-200'
          >
            Welcome to Fresh Harvest
          </Button>
          <h1 className='text-[80px] font-bold'>Fresh Fruit and Vegetable</h1>
          <p className='font-[14px] mb-4 w-[500px]'>
            At fresh harvest,we are passionate about providing you with the
            freshest and most flavaful and vegetable
          </p>
          <Button
            variant='outline '
            className='bg-[#ff6a19] text-white hover:bg-gray-200 text-[22px] p-[28px]'
          >
            Shop Now
          </Button>
          <div className='mx-[120px]'>
            <Image src={arrow} alt='' height={55} width={40} />
          </div>
          <div className='bg-gray-300 flex items-center w-[330px] justify-between  mx-44 mt-[-20px] rounded-lg'>
            <div className='mx-2'>
              <h4 className='text-[#749b3f]'>Special Offer</h4>
              <h1 className='text-[28px]'>Fresh Salad</h1>
              <h3 className='text-[#749b3f]'>
                Up to <span className='text-black text-[20px]'>70% OFF</span>
              </h3>
              <Button variant='outline' className='text-white bg-[#749b3f]'>
                CODE :<span className='text-yellow-400'> SAFJGJ23</span>
              </Button>
            </div>
            <div>
              <Image src={salad} alt='' height={146} width={150} />
            </div>
          </div>
          <div className='mt-[-40px]'>
            <Image src={leaf} alt='' height={60} width={60} />
          </div>
          <p className='mt-6'>Download App</p>
          <div className='my-4 flex gap-2'>
            <Image src={appStore} alt='' height={40} width={138} />
            <Image src={gplay} alt='' height={40} width={138} />
          </div>
        </section>
        <section className='w-1/2 bg-[#749b3f]'></section>
      </div>
      <div className='absolute top-[5%] left-[40%]'>
        <Image src={baby} height={650} width={750} />
      </div>
    </div>
  );
};
export default Hero;
