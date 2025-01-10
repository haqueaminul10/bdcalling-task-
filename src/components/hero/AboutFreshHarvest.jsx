import bgimf from '../assets/AboutFreshHarvest.png';
import { Button } from '../ui/button';
import leaf from '../assets/leaf.png';
import Image from 'next/image';
import logo from '../assets/Logo.png';
const AboutFreshHarvest = () => {
  return (
    <>
      <div className='flex justify-between gap-4 mx-32 my-20 items-center relative'>
        <section
          className='w-1/2'
          style={{
            backgroundImage: `url(${bgimf.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '70vh',
          }}
        >
          <div className='absolute left-[40%] top-[20%]'>
            <Image src={leaf} alt='' height={51} width={67} />
          </div>
          <div className='absolute top-[70%] left-[25%] flex items-center bg-gray-100 p-1'>
            <div>
              {' '}
              <Image src={logo} alt='' height={14} width={24} />
            </div>

            <h3 className='text-[26px] font-semibold'> Fresh Harvests</h3>
          </div>
        </section>
        <section className='w-1/2'>
          <Button
            variant='outlline'
            className='text-green-500 border border-gray-200 p-4 mb-4'
          >
            About us
          </Button>
          <h1 className='text-[48px] font-semibold'>About Fresh Harvest</h1>
          <p className='mb-4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
            tempore voluptates suscipit, nihil, natus adipisci qui quidem minima
            culpa nostrum excepturi recusandae laboriosam voluptatibus sapiente
            veritatis expedita voluptas aliquid tempora vero delectus.
            Voluptates rerum officia nulla fugit porro cumque unde.
          </p>
          <Button
            variant='outline'
            className='text-[#ff6a19] border border-[#ff6a19] p-6'
          >
            Read more
          </Button>
        </section>
      </div>
    </>
  );
};
export default AboutFreshHarvest;
