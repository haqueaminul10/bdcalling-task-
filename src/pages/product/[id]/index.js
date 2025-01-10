import CartIcon from '@/icon/cart';
import FavoriteIcon from '@/icon/favouriteIcon';
import { Button } from '@/ui/button';
import { useState } from 'react';
const ProductDetails = ({ product, categoryName }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  return (
    <>
      <div className='mx-32 my-12 flex gap-12'>
        <section className='w-1/2 border-solid border-2 border-gray-200'>
          <div className='flex justify-center p-4'>
            <img
              src={product.images[0]}
              alt={product.productName}
              className='w-[100%] h-[566px] rounded-lg shadow-lg object-fill'
            />
          </div>
          <div className='flex justify-center my-4'>
            <span className='h-3 w-3 rounded-full bg-green-500 mx-1 cursor-pointer'></span>
            <span className='h-3 w-3 rounded-full bg-gray-400 mx-1 cursor-pointer'></span>
            <span className='h-3 w-3 rounded-full bg-gray-400 mx-1 cursor-pointer'></span>
          </div>
        </section>
        <section className='w-1/2'>
          <Button
            variant='outline'
            className='bg-green-400 text-[20px] text-white capitalize'
          >
            {categoryName}
          </Button>
          <h2 className='text-[48px] font-semibold '>{product.productName}</h2>

          <h4 className='text-[32px] font-medium text-[#ff6a19]'>
            ${product.price}/kg
          </h4>
          <p className='my-6'>{product.description}</p>
          <div>
            {' '}
            <span className=' text-[18px] font-semibold mr-2'>Quantity</span>
            <Button variant='outline' onClick={handleDecrement}>
              -
            </Button>{' '}
            <span className='font-semibold text-[18px] mr-2'>{quantity}</span>{' '}
            <Button variant='outline' onClick={handleIncrement}>
              +
            </Button>
            <div className='mt-8 flex justify-between '>
              <Button variant='outline' className='bg-gray-100 p-8'>
                {' '}
                <FavoriteIcon color='gray' size={28} />{' '}
                <span className='text-[18px]'>Add to Favourite</span>
              </Button>

              <Button variant='outline' className='bg-[#ff6a19] p-8'>
                <CartIcon color='#000' size={24} />
                <span className='text-[18px] text-white'>Add to Cart</span>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;

  const productRes = await fetch(
    `https://test-2-tan-chi.vercel.app/api/v1/products/${id}`
  );
  const productData = await productRes.json();
  const product = productData.data;

  const categoryRes = await fetch(
    `https://test-2-tan-chi.vercel.app/api/v1/category`
  );
  const categoryData = await categoryRes.json();

  const category = categoryData.data.find(
    (cat) => cat.id === product.categoryId
  );

  return {
    props: {
      product,
      categoryName: category ? category.categoryName : null,
    },
  };
}

export default ProductDetails;
