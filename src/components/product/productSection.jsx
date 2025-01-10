import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import MoreProduct from './moreProduct';

const ProductSection = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        'https://test-2-tan-chi.vercel.app/api/v1/products'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const result = await response.json();
      console.log(`📌 ~ fetchProducts ~ result:`, result);

      setProducts(result.data || []);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.categoryId === selectedCategory.id)
    : products;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {/* <div className='grid grid-cols-4 gap-8 mx-32 my-16'>
        {products.length > 0 &&
          products.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className='product-card bg-white p-4 rounded-lg shadow-lg border border-gray-200 w-[282px] h-[380px]'
            >
              <div className='w-[258px] h-[208px] overflow-hidden rounded-lg mx-auto'>
                <img
                  src={product.images[0]}
                  alt={product.productName}
                  className='w-full h-full object-cover'
                />
              </div>

              <h4 className='product-name mt-4 text-lg font-semibold text-gray-800 text-center'>
                {product.productName}
              </h4>
              <p className='product-price text-lg text-gray-600 mt-2 text-center'>
                ${product.price.toFixed(2)}
              </p>

              <Button className='mt-4 w-full bg-white text-black py-2 rounded-lg hover:bg-[#ff6a19] hover:text-white transition duration-200'>
                Add to Cart
              </Button>
            </div>
          ))}
      </div>
      <div>
        <MoreProduct />
      </div> */}

      <div className='grid grid-cols-4 gap-8 mx-32 my-16'>
        {filteredProducts.length > 0 &&
          filteredProducts.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className='product-card bg-white p-4 rounded-lg shadow-lg border border-gray-200 w-[282px] h-[380px]'
            >
              <div className='w-[258px] h-[208px] overflow-hidden rounded-lg mx-auto'>
                <img
                  src={product.images[0]}
                  alt={product.productName}
                  className='w-full h-full object-cover'
                />
              </div>

              <h4 className='product-name mt-4 text-lg font-semibold text-gray-800 text-center'>
                {product.productName}
              </h4>
              <p className='product-price text-lg text-gray-600 mt-2 text-center'>
                ${product.price.toFixed(2)}
              </p>

              <Button className='mt-4 w-full bg-white text-black py-2 rounded-lg hover:bg-[#ff6a19] hover:text-white transition duration-200'>
                Add to Cart
              </Button>
            </div>
          ))}
      </div>
      <div>
        <MoreProduct />
      </div>
    </>
  );
};

export default ProductSection;
