import React from 'react';
import { Button,Rate} from 'antd';
import { useParams } from 'react-router-dom';
import useGetProductById from './useGetProductDetail';

const ProductDetailPage = () => {
    const { id } = useParams();
    const {data} = useGetProductById(id);
    
    console.log(data);
    const product = data ? {
        name: data.watch.watchName,
        brand: data.watch.brand.brandName,
        image: data.watch.image,
        price: `$${data.watch.price}`,
        description: data.watch.watchDescription,
        rating: 4.5, 

    } : null;

  
  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <section className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img src={product.image} alt={product.image} className="h-full w-full object-cover object-center" />
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:col-span-2">
              <h1 className="text-lg lg:text-xl font-semibold text-gray-800">{product.name}</h1>
              <h1 className="text-lg lg:text-xl tracking-tight text-gray-900 opacity-60 pt-1">
                {product.brand}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className='flex space-x-5 items-center text-lg lg:text-x1 text-gray-900 mt-6'>
                <p className='font-semibold'>{product.price}</p>
              </div>
              
              {/* Reviews */}
              <div className="mt-6">
                <div className='flex items-center space-x-3'>
                  <Rate name="read-only" value={product.rating} readOnly />
                  <p className='opacity-50 text-sm'> Ratings</p>
                  <p className='ml-3 text-sm font-medium text-indigo-700 hover:text-indigo-500'> Reviews</p>
                </div>
              </div>

              <form className="mt-10">
                <Button color="secondary" variant="contained" sx={{p:"2rem",py:"1rem"}}>
                    Add to Cart
                </Button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">{product.description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

    
        <section className="px-4 py-6">
  <h1 className="font-semibold text-lg pb-4">
    Recent Reviews & Ratings
  </h1>
  <div className="space-y-4">
      <p>No reviews yet.</p>
  </div>
</section>
      </div>
    </div>
  );
};

export default ProductDetailPage;