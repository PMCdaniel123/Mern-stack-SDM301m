import {
  CREATE_WATCHES,
  DELETE_WATCHES,
  GET_WATCHES,
  GET_WATCHES_BY_ID,
  UPDATE_WATCHES,
} from '@/constant/environments';
import axiosInstance from '@/utils/axiosInstance';

const CreateWatches = async ({
  watchName,
  image,
  price,
  Automatic,
  watchDescription,
  brand,
}) => {
  try {
    const data = await axiosInstance.post(CREATE_WATCHES, {
      watchName,
      image,
      price,
      Automatic,
      watchDescription,
      brand,
    });
    return data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const UpdateWatches = async ({
  id,
  watchName,
  image,
  price,
  Automatic,
  watchDescription,
  brand,
}) => {
  try {
    const data = await axiosInstance.put(UPDATE_WATCHES + '/' + id, {
      watchName,
      image,
      price,
      Automatic,
      watchDescription,
      brand,
    });
    return data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const DeleteWatches = async (id) => {
  try {
    const data = await axiosInstance.delete(DELETE_WATCHES + '/' + id);
    return data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const GetWatchesList = async ({ brandNames, value }) => {
  try {
    let query = '';

    if (value && value.length > 0 && brandNames && brandNames.length > 0) {
      query = `?watchName=${value}&brandNames=${brandNames}`;
    } else if (value && value.length > 0) {
      query = `?watchName=${value}`;
    } else if (brandNames && brandNames.length > 0) {
      query = `?brandNames=${brandNames}`;
    }
    const data = await axiosInstance.get(GET_WATCHES + query);
    return data.watches;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const GetWatchById = async (id) => {
  try {
    const data = await axiosInstance.get(GET_WATCHES_BY_ID + '/' + id);
    return data.watch;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const WatchesManagementListAPI = {
  GetWatchesList,
  CreateWatches,
  DeleteWatches,
  UpdateWatches,
  GetWatchById,
};

export default WatchesManagementListAPI;
