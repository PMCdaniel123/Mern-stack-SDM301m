import { GET_MEMBERS } from '@/constant/environments';
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

const MembersManagementListAPI = {
  GetMembersList,
};

export default MembersManagementListAPI;
