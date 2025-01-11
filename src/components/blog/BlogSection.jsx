import Image from 'next/image';
import blog1 from '@/components/assets/Blog1.png';
import blog2 from '@/components/assets/Blog2.png';
import blog3 from '@/components/assets/Blog3.png';
import RightArrowIcon from '@/icon/RightArrowIcon';

const BlogSection = () => {
  const blogs = [
    {
      image: blog1,
      date: 'May 23, 2024',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsa magni quas.',
    },
    {
      image: blog2,
      date: 'May 24, 2024',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsa magni quas.',
    },
    {
      image: blog3,
      date: 'May 25, 2024',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsa magni quas.',
    },
  ];

  return (
    <div className=''>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
        {blogs.map((blog, index) => (
          <div
            key={index}
            className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'
          >
            <div className='relative w-full h-48'>
              <Image
                src={blog.image}
                alt={`Blog Image ${index + 1}`}
                layout='fill'
                objectFit='cover'
                className='rounded-t-lg'
              />
            </div>

            <div className='p-4'>
              <p className='text-sm text-gray-500 mb-2'>{blog.date}</p>
              <p className='text-base text-gray-800 font-medium mb-4'>
                {blog.des}
              </p>
              <p className=' text-[#ff6a19] flex items-center gap-2'>
                Read More <RightArrowIcon size='16' color='#ff6a19' />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
