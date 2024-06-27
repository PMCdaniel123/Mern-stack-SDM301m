import React, { useEffect } from 'react';
import { Descriptions, Spin } from 'antd';
import useGetMemberInfo from './useGetProfile';
import useUpdateProfile from './useUpdateProfile';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import UpdatePassword from '@/features/UpdatePassword/UpdatePassword';

const schema = yup
  .object({
    name: yup.string().required('Name is required'),
    YOB: yup
      .number()
      .typeError('Year of Birth must be a number')
      .required('Year of Birth is required')
      .min(1964, 'Year of Birth must be after 1964')
      .max(2009, 'You must be above 15 years old to register'),
  })
  .required();

const UserProfile = () => {
  const { data, isLoading } = useGetMemberInfo();
  console.log(data);
  const updateProfile = useUpdateProfile();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spin />
      </div>
    );
  }

  return (
    <div className="p-10 m-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Descriptions
          title="User Info"
          layout="vertical"
          bordered={true}
          className="flex flex-col"
        >
          <Descriptions.Item label="Name">
            <input
              {...register('name')}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </Descriptions.Item>
          <Descriptions.Item label="Year of Birth">
            <input
              {...register('YOB')}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            {errors.YOB && <p className="text-red-500">{errors.YOB.message}</p>}
          </Descriptions.Item>
        </Descriptions>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 duration-300 text-white font-bold py-2 px-4 rounded my-8"
        >
          Update Profile
        </button>
      </form>
      <UpdatePassword />
    </div>
  );
};

export default UserProfile;
