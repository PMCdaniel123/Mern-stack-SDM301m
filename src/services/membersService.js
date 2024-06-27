import {
  UPDATE_PROFILE,
  GET_MEMBER_INFO,
  GET_MEMBERS,
  UPDATE_PASSWORD,
  REGISTER,
} from '@/constant/environments';
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

const UpdateMemberInfo = async ({ name, YOB }) => {
  try {
    const data = await axiosInstance.put(UPDATE_PROFILE, { name, YOB });
    return data.profile;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const AddComment = async ({ watchId, rating, content }) => {
  try {
    const data = await axiosInstance.post(`/watches/${watchId}/comment`, {
      rating,
      content,
    });
    return data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const DeleteComment = async ({ watchId, commentId }) => {
  try {
    const data = await axiosInstance.delete(
      `/watches/${watchId}/comment/${commentId}`,
    );
    return data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const UpdateComment = async ({ watchId, commentId, rating, content }) => {
  try {
    const data = await axiosInstance.put(
      `/watches/${watchId}/comment/${commentId}`,
      {
        rating,
        content,
      },
    );
    return data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const UpdatePassword = async ({
  currentPassword,
  newPassword,
  confirmNewPassword,
}) => {
  try {
    const data = await axiosInstance.put(UPDATE_PASSWORD, {
      currentPassword,
      newPassword,
      confirmNewPassword,
    });
    return data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const Register = async ({ membername, password, name, YOB }) => {
  try {
    console.log({
      membername,
      password,
      name,
      YOB,
    });
    const data = await axiosInstance.post(REGISTER, {
      membername,
      password,
      name,
      YOB,
    });
    return data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const MembersManagementListAPI = {
  GetMembersList,
  GetMemberInfo,
  UpdateMemberInfo,
  AddComment,
  DeleteComment,
  UpdateComment,
  UpdatePassword,
  Register,
};

export default MembersManagementListAPI;
