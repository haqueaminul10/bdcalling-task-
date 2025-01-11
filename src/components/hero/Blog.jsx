import { Button } from '../ui/button';
import Image from 'next/image';
import leaf from '@/components/assets/leaf.png';
import BlogCard from '../blog/BlogCard';
import { blogsData } from '../../../data/inde';

const Blog = () => {
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
        <div className='absolute top-[80%] left-[70%]'>
          <Image src={leaf} alt='' height={40} width={90} />
        </div>
      </div>
      <div className='mx-32 my-20'>
        <BlogCard blogsData={blogsData} />
      </div>
    </>
  );
};

export default Blog;
