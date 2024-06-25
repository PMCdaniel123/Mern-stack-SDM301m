import React, { useEffect } from 'react';
import { Descriptions } from 'antd';
import useGetMemberInfor from './useGetProfile';
import useUpdateProfile from './useUpdateProfile';
import { useForm } from 'react-hook-form';

const UserProfile = () => {
  const { data, isLoading } = useGetMemberInfor();
  const updateProfile = useUpdateProfile();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    updateProfile.mutate({
      name: data.name,
      YOB: data.YOB,
    });
  };
  useEffect(() => {
    if (data) {
      reset({
        name: data.name,
        YOB: data.YOB,
      });
    }
  }, [data, reset]);

    if (isLoading) return <div>Loading...</div>;
  
  

  return (
    <div className='p-10 m-6'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Descriptions title="User Info" layout="vertical">
        <Descriptions.Item label="Name">
          <input
            {...register('name', { required: true })}
            className="border border-gray-300 rounded-md p-1"
          />
        </Descriptions.Item>
        <Descriptions.Item label="Year of Birth">
          <input
            {...register('YOB', { required: true })}
            className="border border-gray-300 rounded-md p-1"
          />
        </Descriptions.Item>
      </Descriptions>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Update
      </button>
    </form>
    </div>
  );
};

export default UserProfile;