import { MESS } from '@/constant/validate';
import { closePopup } from '@/store/reducers/popupReducer';
import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import useAddBrands from './useAddBrands';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';

const AddBrands = () => {
  const dispatch = useDispatch();
  const addBrand = useAddBrands();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    addBrand.mutate({
      brandName: data.brandName,
    });
  };

  const handleCancel = () => {
    dispatch(closePopup('Create a new brand'));
  };

  return (
    <div className="p-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Brand Name</h1>
          <div className="w-3/4">
            <input
              type="text"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Brand name..."
              {...register('brandName', {
                required: MESS.ERROR_BRAND_NAME,
              })}
            />
            {errors.brandName && (
              <span className="text-red-500 text-sm">
                {errors.brandName.message}
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
              Add
            </Button>
          </ConfigAntdButton>
        </div>
      </form>
    </div>
  );
};

export default AddBrands;
