import bg from '@/components/assets/Bg.png';
import { Button } from '../ui/button';
const SpecialOffer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <div className='px-32 py-12'>
        <Button
          variant='outlline'
          className='text-green-500 border border-gray-300 p-4 mb-4'
        >
          Special offer
        </Button>
        <h1 className='text-[80px]'>Seasonal Fruit Bundle</h1>
        <h3>
          Discount up to <span>80% OFF</span>
        </h3>
        <div>
          <div>
            <h2></h2>
            <p></p>
          </div>
        </div>
        <Button variant='outline' className='bg-[#176d38]'>
          {' '}
          CODE: <span>FRUIT28</span>
        </Button>
      </div>
    </div>
  );
};

export default SpecialOffer;
