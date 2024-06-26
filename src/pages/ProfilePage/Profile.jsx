import React, { useEffect } from 'react';
import { Descriptions } from 'antd';
import useGetMemberInfor from './useGetProfile';
import useUpdateProfile from './useUpdateProfile';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import UpdatePassword from '@/features/UpdatePassword/UpdatePassword';


const schema = yup.object({
  name: yup.string().required('Name is required'),
  YOB: yup.number().typeError('Year of Birth must be a number').required('Year of Birth is required').min(1964, 'Year of Birth must be after 1964').max(2009, 'You must be above 15 years old to register'),
}).required();

const UserProfile = () => {
  const { data, isLoading } = useGetMemberInfor();
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

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-10 m-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Descriptions title="User Info" layout="vertical">
          <Descriptions.Item label="Name">
            <input
              {...register('name')}
              className="border border-gray-300 rounded-md p-1"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </Descriptions.Item>
          <Descriptions.Item label="Year of Birth">
            <input
              {...register('YOB')}
              className="border border-gray-300 rounded-md p-1"
            />
            {errors.YOB && <p className="text-red-500">{errors.YOB.message}</p>}
          </Descriptions.Item>
        </Descriptions>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update
        </button>
      </form>
      <UpdatePassword />
    </div>
  );
};

export default UserProfile;