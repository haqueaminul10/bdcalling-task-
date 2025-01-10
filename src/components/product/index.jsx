import { useState } from 'react';
import { Button } from '../ui/button';
import ProductCategory from './productCategory';
import ProductSection from './productSection';
const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <div className='flex justify-center'>
        <div className='w-[600px]'>
          <div className='flex justify-center'>
            <Button className='bg-gray-50 text-[#729842]'>Our Products</Button>
          </div>

          <h1 className='text-center text-5xl font-extrabold mt-4 mb-4'>
            Our Fresh Products
          </h1>
          <p className='text-center '>
            We pride ourselves on offering a wide variety of fresh and flavaafyl
            fruits, vagetabls, and salad ingredient
          </p>
        </div>
      </div>
      <div>
        <ProductCategory onSelectCategory={handleCategorySelect} />
      </div>
      <div>
        <ProductSection selectedCategory={selectedCategory} />
      </div>
    </>
  );
};
export default Product;
