import { GET_MEMBER_INFO, GET_MEMBERS } from '@/constant/environments';
import axiosInstance from '@/utils/axiosInstance';

const GetMembersList = async () => {
  try {
    const data = await axiosInstance.get(GET_MEMBERS);
    return data.members;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const GetMemberInfo = async () => {
  try {
    const data = await axiosInstance.get(GET_MEMBER_INFO);
    return data.profile;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const UpdateMemberInfo = async () => {
  try {
    const data = await axiosInstance.put(UPDATE_PROFILE);
    return data.profile;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const MembersManagementListAPI = {
  GetMembersList,
  GetMemberInfo,
  UpdateMemberInfo
  
};

export default MembersManagementListAPI;
