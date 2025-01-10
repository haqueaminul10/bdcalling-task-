import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
const ProductCategory = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        'https://test-2-tan-chi.vercel.app/api/v1/category'
      );
      const data = await response.json();
      if (data.success) {
        setCategories(data.data);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className='flex justify-center mt-4 gap-4'>
      <Button
        variant='outline'
        className={`gap-4 ${
          !selectedCategory
            ? 'bg-green-500 text-white hover:bg-green-500 hover:text-white'
            : ''
        }`}
        onClick={() => handleSelectCategory(null)}
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          variant='outline'
          key={category.id}
          className={`gap-4 ${
            selectedCategory?.id === category.id
              ? 'bg-green-500 text-white hover:bg-green-500 hover:text-white'
              : ''
          }`}
          onClick={() => handleSelectCategory(category)}
        >
          {category.categoryName}
        </Button>
      ))}
    </div>
  );
};

export default ProductCategory;
