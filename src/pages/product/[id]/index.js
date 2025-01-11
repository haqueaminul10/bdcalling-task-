import CartIcon from '@/icon/cart';
import FavoriteIcon from '@/icon/favouriteIcon';
import { Button } from '@/ui/button';
import { useState } from 'react';
import ReletedProduct from '@/components/reletedProduct/index';

const ProductDetails = ({ product, categoryName, relatedProducts }) => {
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
          <h2 className='text-[48px] font-semibold'>{product.productName}</h2>
          <h4 className='text-[32px] font-medium text-[#ff6a19]'>
            ${product.price}/kg
          </h4>
          <p className='my-6'>{product.description}</p>

          <div>
            <span className='text-[18px] font-semibold mr-2'>Quantity</span>
            <Button variant='outline' onClick={handleDecrement}>
              -
            </Button>
            <span className='font-semibold text-[18px] mr-2'>{quantity}</span>
            <Button variant='outline' onClick={handleIncrement}>
              +
            </Button>
          </div>

          <div className='mt-8 flex justify-between'>
            <Button variant='outline' className='bg-gray-100 p-8'>
              <FavoriteIcon color='gray' size={28} />
              <span className='text-[18px]'>Add to Favourite</span>
            </Button>
            <Button variant='outline' className='bg-[#ff6a19] p-8'>
              <CartIcon color='#000' size={24} />
              <span className='text-[18px] text-white'>Add to Cart</span>
            </Button>
          </div>
        </section>
      </div>

      {/* <div className='mx-32 my-12'>
        <h3 className='text-[32px] font-semibold mb-6'>Related Products</h3>
        <div className='grid grid-cols-4 gap-8'>
          {relatedProducts.map((relatedProduct) => (
            <div
              key={relatedProduct.id}
              className='border border-gray-200 p-4 rounded-lg shadow-md'
            >
              <img
                src={relatedProduct.images[0]}
                alt={relatedProduct.productName}
                className='w-full h-[200px] object-cover rounded-lg'
              />
              <h4 className='text-lg font-medium mt-4'>
                {relatedProduct.productName}
              </h4>
              <p className='text-sm text-gray-500 mt-2'>
                ${relatedProduct.price}/kg
              </p>
              <Button
                variant='outline'
                className='bg-[#ff6a19] text-white mt-4 w-full'
              >
                View Details
              </Button>
            </div>
          ))}
        </div>
      </div> */}
      <div>
        <ReletedProduct relatedProducts={relatedProducts} />
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;

  const productRes = await fetch(
    `https://test-2-tan-chi.vercel.app/api/v1/products`
  );
  const productData = await productRes.json();
  const allProducts = productData.data;

  const product = allProducts.find((product) => product.id === id);

  const categoryRes = await fetch(
    `https://test-2-tan-chi.vercel.app/api/v1/category`
  );
  const categoryData = await categoryRes.json();
  const category = categoryData.data.find(
    (cat) => cat.id === product.categoryId
  );

  const relatedProducts = allProducts.filter(
    (relatedProduct) =>
      relatedProduct.categoryId === product.categoryId &&
      relatedProduct.id !== product.id
  );

  return {
    props: {
      product,
      categoryName: category ? category.categoryName : null,
      relatedProducts,
    },
  };
}

export default ProductDetails;
