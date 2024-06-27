import React, { useEffect, useState } from 'react';
import {
  Breadcrumb,
  Button,
  Descriptions,
  Form,
  Input,
  Typography,
} from 'antd';
import useGetMemberInfor from './useGetProfile';
import useUpdateProfile from './useUpdateProfile';
import { Controller, useForm } from 'react-hook-form';
import './Profile.css';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';
import { Link } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import { PATHS } from '@/constant/path';

const UserProfile = () => {
  const { data, isLoading } = useGetMemberInfor();
  const [isEditing, setIsEditing] = useState(false);
  const updateProfile = useUpdateProfile();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    updateProfile.mutate({
      name: data.name,
      YOB: data.YOB,
    });
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    reset({
      name: data.name,
      YOB: data.YOB,
    });
    setIsEditing(false);
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
    <div className="p-9">
      <div>
        <section className="px-10 py-2">
          <Breadcrumb
            items={[
              {
                title: (
                  <Link to={PATHS.HOME}>
                    <HomeOutlined /> <span>Home</span>
                  </Link>
                ),
              },
              {
                title: 'User Info',
              },
            ]}
          />
        </section>
      </div>

      <div className="profile-container p-10 m-6 bg-white shadow-lg rounded-lg">
        <Form onFinish={handleSubmit(onSubmit)} layout="horizontal">
          <Descriptions title="Your Info" layout="vertical" bordered>
            <Descriptions.Item label="Name">
              {isEditing ? (
                <Form.Item>
                  <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Name is required' }}
                    render={({ field }) => (
                      <Input {...field} placeholder="Enter your name" />
                    )}
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </Form.Item>
              ) : (
                <Typography>{data.name}</Typography>
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Year of Birth">
              {isEditing ? (
                <Form.Item>
                  <Controller
                    name="YOB"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: 'Year of birth is required',
                      validate: (value) =>
                        (value >= 1964 && value <= 2009) ||
                        'Year of birth must be between 1964 and 2009',
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="Enter your year of birth"
                      />
                    )}
                  />
                  {errors.YOB && (
                    <p className="text-red-500">{errors.YOB.message}</p>
                  )}
                </Form.Item>
              ) : (
                <Typography>{data.YOB}</Typography>
              )}
            </Descriptions.Item>
          </Descriptions>
          <div className="button-group mt-4 flex gap-2">
            {isEditing ? (
              <>
                <ConfigAntdButton type="danger">
                  <Button type="primary" onClick={handleCancel}>
                    Cancel
                  </Button>
                </ConfigAntdButton>
                <ConfigAntdButton type="primary">
                  <Button type="primary" htmlType="submit">
                    Save
                  </Button>
                </ConfigAntdButton>
              </>
            ) : (
              <div></div>
            )}
          </div>
        </Form>
        {!isEditing ? (
          <ConfigAntdButton type="primary">
            <Button
              className="w-full"
              type="primary"
              htmlType="button"
              onClick={handleEdit}
            >
              Edit
            </Button>
          </ConfigAntdButton>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
