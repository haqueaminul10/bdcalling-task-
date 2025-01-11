import Image from 'next/image';
export const discountData = [
  {
    id: 1,
    time: '03',
    label: 'days',
  },
  {
    id: 2,
    time: '18',
    label: 'hours',
  },
  {
    id: 3,
    time: '54',
    label: 'min',
  },
  {
    id: 4,
    time: '21',
    label: 'second',
  },
];

export const blogsData = [
  {
    id: 1,
    image: '/assets/Blog1.png',
    date: 'May 23, 2024',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsa magni quas.',
  },
  {
    id: 2,
    image: '/assets/Blog2.png',

    date: 'May 24, 2024',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsa magni quas.',
  },
  {
    id: 3,
    image: '/assets/Blog3.png',

    date: 'May 25, 2024',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsa magni quas.',
  },
];

export const menu = [
  { id: 1, name: 'Home', route: '/' },
  { id: 2, name: 'Shop', route: '/shop' },
  { id: 3, name: 'About us', route: '/aboutus' },
  { id: 4, name: 'Blog', route: '/bog' },
];

export const testimonialItems = [
  <div className='flex w-full items-center'>
    <section className='w-1/3'>
      <Image src='/assets/customer.png' alt='' height={287} width={400} />
    </section>
    <section className='w-1/3 h-[216px] bg-gray-300 p-4 rounded-lg'>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsa
        magni quas eius distinctio corrupti. Accusamus suscipit adipisci quas.
        Illum tempore porro rem recusandae, deserunt debitis libero totam nihil
        minus quis ex quisquam, accusantium ea dolores nulla eius, rerum
        inventore voluptate. Impedit architecto ipsum quae, odio laudantium
        labore unde officiis aut saepe dignissimos laboriosam.
      </p>
      <h3 className='my-4 '>
        <span className='font-semibold'>Jane Doe</span> - Profession Chef
      </h3>
    </section>
  </div>,
];
