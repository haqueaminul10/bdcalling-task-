import bg from '@/components/assets/Bg.png';
import { Button } from '../ui/button';
import fruit from '@/components/assets/fruit.png';
import Image from 'next/image';
import leaf from '@/components/assets/leaf.png';
const SpecialOffer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '540px',
        marginBottom: '50px',
      }}
      className='relative'
    >
      <div className='px-32 py-32'>
        <Button
          variant='outlline'
          className='text-green-500 border border-gray-300 p-4 mb-4'
        >
          Special offer
        </Button>
        <h1 className='text-[80px]'>Seasonal Fruit Bundle</h1>
        <h3 className='text-[48px'>
          Discount up to <span className='text-[#ff6a19]'>80% OFF</span>
        </h3>
        <div className='flex  items-center gap-8   w-[80px] h-[122px] my- 6'>
          <div className='px-5 bg-white'>
            <h2 className='text-[30px] '>03</h2>
            <p>Days</p>
          </div>
          <div className='px-5 bg-white'>
            <h2 className='text-[30px] '>18</h2>
            <p>Hours</p>
          </div>
          <div className='px-5 bg-white'>
            <h2 className='text-[30px] '>54</h2>
            <p>Min</p>
          </div>
          <div className='px-5 bg-white'>
            <h2 className='text-[30px] '>21</h2>
            <p>Second</p>
          </div>
        </div>
        <Button
          variant='outline'
          className='bg-[#176d38] text-white text-[28px] rounded-full '
          style={{ padding: '30px' }}
        >
          CODE:
          <span className='text-[#fac714]'>FRUIT28</span>
        </Button>
      </div>
      <div className='absolute top-[30%] left-[45%]'>
        <Image src={fruit} alt='' height={380} width={627} />
      </div>
      <div className='absolute top-[10%] left-[60%]'>
        <Image src={leaf} alt='' height={40} width={90} />
      </div>
    </div>
  );
};

export default SpecialOffer;
