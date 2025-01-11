import { Button } from '../ui/button';

const MoreProduct = ({ noMoreProducts, loadMoreProducts }) => {
  return (
    <div className='flex justify-center'>
      {noMoreProducts ? (
        <p>No more products</p>
      ) : (
        <Button
          className='text-[#ff6a19] bg-white border-solid border-2 border-[#ff6a19] hover:bg-white'
          onClick={loadMoreProducts}
        >
          See All Product
        </Button>
      )}
    </div>
  );
};

export default MoreProduct;
