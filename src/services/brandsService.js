import {
  CREATE_BRANDS,
  DELETE_BRANDS,
  GET_BRANDS,
  UPDATE_BRANDS,
} from '@/constant/environments';
import axiosInstance from '@/utils/axiosInstance';

const CreateBrands = async ({ brandName }) => {
  try {
    const data = await axiosInstance.post(CREATE_BRANDS, {
      brandName,
    });
    return data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const UpdateBrands = async ({ id, brandName }) => {
  try {
    const data = await axiosInstance.patch(UPDATE_BRANDS + '/' + id, {
      brandName,
    });
    return data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const DeleteBrands = async (id) => {
  try {
    const data = await axiosInstance.delete(DELETE_BRANDS + '/' + id);
    return data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const GetBrandsList = async () => {
  try {
    const data = await axiosInstance.get(GET_BRANDS);
    return data.brands;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const BrandsManagementListAPI = {
  GetBrandsList,
  CreateBrands,
  DeleteBrands,
  UpdateBrands,
};

export default BrandsManagementListAPI;
