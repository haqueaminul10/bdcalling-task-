import { Button } from '../ui/button';
import customer from '@/components/assets/customer.png';
import Image from 'next/image';
import leaf from '@/components/assets/leaf.png';
const CustomerSay = () => {
  return (
    <>
      <div className='flex justify-center relative'>
        <div className='w-[600px]'>
          <div className='flex justify-center'>
            <Button className='bg-gray-50 text-[#729842]'>Testimonial</Button>
          </div>

          <h1 className='text-center text-5xl font-extrabold mt-4 mb-4'>
            What Our Customers Say
          </h1>
          <p className='text-center '>
            We pride ourselves on offering a wide variety of fresh and flavaafyl
            fruits, vagetabls, and salad ingredient
          </p>
        </div>
        <div className='absolute top-[80%] left-[80%]'>
          <Image src={leaf} alt='' height={40} width={90} />
        </div>
        <div className='absolute top-[80%] left-[10%]'>
          <Image src={leaf} alt='' height={40} width={90} />
        </div>
      </div>

      <div className='flex  gap-16 mx-32 my-20 items-center '>
        <section>
          <Image src={customer} alt='' height={287} width={400} />
        </section>
        <section className='w-[580px] h-[216px] bg-gray-300 p-4 rounded-lg'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ipsa magni quas eius distinctio corrupti. Accusamus suscipit
            adipisci quas. Illum tempore porro rem recusandae, deserunt debitis
            libero totam nihil minus quis ex quisquam, accusantium ea dolores
            nulla eius, rerum inventore voluptate. Impedit architecto ipsum
            quae, odio laudantium labore unde officiis aut saepe dignissimos
            laboriosam{' '}
          </p>
          <h3 className='my-4'>
            {' '}
            <span className='font-semibold'>Jane Doe</span> -Profrssion Chef
          </h3>
        </section>
      </div>
    </>
  );
};

export default CustomerSay;
