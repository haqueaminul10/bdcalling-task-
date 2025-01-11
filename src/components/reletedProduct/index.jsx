import { useCart } from '@/pages/api/CartContext';
import { Button } from '../ui/button';

const ReletedProduct = ({ relatedProducts }) => {
  const { addToCart } = useCart();
  const handleAddToCart = (product) => {
    addToCart(product, 1);
  };
  return (
    <>
      <div className='flex justify-center'>
        <div className='w-[600px]'>
          <div className='flex justify-center'>
            <Button className='bg-gray-50 text-[#729842]'>Our Products</Button>
          </div>

          <h1 className='text-center text-5xl font-extrabold mt-4 mb-4'>
            Related products
          </h1>
          <p className='text-center '>
            We pride ourselves on offering a wide variety of fresh and flavaafyl
            fruits, vagetabls, and salad ingredient
          </p>
        </div>
      </div>

      <div className='grid grid-cols-4 gap-8 mx-32 my-16'>
        {relatedProducts.length > 0 &&
          relatedProducts.slice(0, 4).map((relatedProduct) => (
            <div
              key={relatedProduct.id}
              className='product-card bg-white p-4 rounded-lg shadow-lg border border-gray-200 w-[282px] h-[380px]'
            >
              <div
                className='w-[258px] h-[208px] overflow-hidden rounded-lg mx-auto'
                onClick={() => router.push(`/product/${relatedProduct.id}`)}
              >
                <img
                  src={relatedProduct.images[0]}
                  alt={relatedProduct.productName}
                  className='w-full h-full object-cover'
                />
              </div>

              <h4
                className='product-name mt-4 text-lg font-semibold text-gray-800 text-center cursor-pointer'
                onClick={() => router.push(`/product/${relatedProduct.id}`)}
              >
                {relatedProduct.productName}
              </h4>
              <p className='product-price text-lg text-gray-600 mt-2 text-center'>
                ${relatedProduct.price.toFixed(2)}/kg
              </p>

              <Button
                className='mt-4 w-full bg-white text-black py-2 rounded-lg hover:bg-[#ff6a19] hover:text-white transition duration-200'
                onClick={() => handleAddToCart(relatedProduct)}
              >
                Add to Cart
              </Button>
            </div>
          ))}
      </div>
    </>
  );
};
export default ReletedProduct;
