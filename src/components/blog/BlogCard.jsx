import Image from 'next/image';

import RightArrowIcon from '@/icon/RightArrowIcon';

const BlogCard = ({ blogsData }) => {
  return (
    <div className=''>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
        {blogsData.map((blog) => (
          <div
            key={blog.id}
            className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'
          >
            <div className='relative w-full h-48'>
              <Image
                src={blog.image}
                alt={`Blog Image ${blog.id + 1}`}
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
              <p className=' text-[#ff6a19] flex items-center gap-2 cursor-pointer'>
                Read More <RightArrowIcon size='16' color='#ff6a19' />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
