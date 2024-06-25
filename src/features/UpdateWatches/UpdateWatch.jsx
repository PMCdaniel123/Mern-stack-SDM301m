import { MESS } from '@/constant/validate';
import { closePopup } from '@/store/reducers/popupReducer';
import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useGetWatchById } from './useGetWatchById';
import { useEffect } from 'react';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';
import useGetBrandsList from '@/pages/BrandsPage/useGetBrandsList';
import useUpdateWatch from './useUpdateWatch';

const UpdateWatch = ({ id }) => {
  const dispatch = useDispatch();
  const { data: brandsList } = useGetBrandsList();
  const { data, isLoading } = useGetWatchById(id);
  const updateWatch = useUpdateWatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    updateWatch.mutate({
      id: id,
      watchName: data.watchName,
      image: data.image,
      price: data.price,
      Automatic: data.Automatic,
      watchDescription: data.watchDescription,
      brand: data.brand,
    });
  };

  useEffect(() => {
    if (data) {
      reset({
        watchName: data.watchName,
        image: data.image,
        price: data.price,
        Automatic: data.Automatic,
        watchDescription: data.watchDescription,
        brand: data.brand._id,
      });
    }
  }, [data, reset]);

  const handleCancel = () => {
    dispatch(closePopup('Update Watch'));
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="p-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Watch Name</h1>
          <div className="w-3/4">
            <input
              type="text"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Watch name..."
              {...register('watchName', {
                required: MESS.ERROR_WATCH_NAME,
              })}
            />
            {errors.watchName && (
              <span className="text-red-500 text-sm">
                {errors.watchName.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Image URL</h1>
          <div className="w-3/4">
            <input
              type="text"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Image URL..."
              {...register('image', {
                required: MESS.ERROR_IMAGE_URL,
              })}
            />
            {errors.image && (
              <span className="text-red-500 text-sm">
                {errors.image.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Price</h1>
          <div className="w-3/4">
            <input
              type="text"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Price..."
              {...register('price', {
                required: MESS.ERROR_PRICE,
                validate: {
                  positive: (value) =>
                    parseFloat(value) >= 0 || MESS.ERROR_PRICE_POSITIVE,
                  number: (value) => !isNaN(value) || MESS.ERROR_PRICE_NUMBER,
                },
              })}
            />
            {errors.price && (
              <span className="text-red-500 text-sm">
                {errors.price.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Automatic</h1>
          <div className="w-3/4">
            <input type="checkbox" {...register('Automatic')} />
          </div>
        </div>
        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">
            Description
          </h1>
          <div className="w-3/4">
            <input
              type="text"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Description..."
              {...register('watchDescription')}
            />
          </div>
        </div>
        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Brand</h1>
          <div className="w-3/4">
            <select
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              {...register('brand', {
                required: MESS.ERROR_BRAND_NAME_OPTION,
              })}
            >
              <option value="" disabled>
                Select one
              </option>
              {brandsList?.map((brand) => (
                <option key={brand._id} value={brand._id}>
                  {brand.brandName}
                </option>
              ))}
            </select>
            {errors.brand && (
              <span className="text-red-500 text-sm">
                {errors.brand.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-row gap-1 justify-center p-4">
          <ConfigAntdButton type="danger">
            <Button type="primary" onClick={handleCancel}>
              Cancel
            </Button>
          </ConfigAntdButton>
          <ConfigAntdButton>
            <Button type="primary" onClick={handleSubmit(onSubmit)}>
              Update
            </Button>
          </ConfigAntdButton>
        </div>
      </form>
    </div>
  );
};

export default UpdateWatch;
