import { GET_MEMBERS, GET_PROFILE } from '@/constant/environments';
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
const GetMemberProfile = async () => {
  try {
    const data = await axiosInstance.get(GET_PROFILE);
    return data.profile;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const MembersManagementListAPI = {
  GetMembersList,
  GetMemberProfile
};

export default MembersManagementListAPI;
