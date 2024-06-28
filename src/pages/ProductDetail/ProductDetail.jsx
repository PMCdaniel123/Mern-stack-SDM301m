import React, { useState } from 'react';
import { useGetWatchById } from '@/features/UpdateWatches/useGetWatchById';
import {
  Button,
  Rate,
  Form,
  Empty,
  Image,
  Divider,
  Typography,
  Tag,
  Breadcrumb,
  notification,
} from 'antd';
import { Link, useParams } from 'react-router-dom';
import { ViewCommentsOptionDropdown } from '@/constant/menu-data';
import { useSelector } from 'react-redux';
import { CommentOutlined, HomeOutlined } from '@ant-design/icons';
import { PATHS } from '@/constant/path';
import useAddComment from './useAddComment';
import Dropdown from '@/components/Dropdown/Dropdown';
import useGetMemberInfor from '../ProfilePage/useGetProfile';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';
import TextArea from 'antd/es/input/TextArea';
import Title from 'antd/es/typography/Title';

const ProductDetail = () => {
  const { data: member, isLoading: loading } = useGetMemberInfor();
  const { watchId } = useParams();
  const { data: watch, isLoading } = useGetWatchById(watchId);
  const addCommentMutation = useAddComment(watchId);
  const token = useSelector((state) => state.auth.token);
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    try {
      await addCommentMutation.mutateAsync({ rating, content, watchId });
      setRating(0);
      setContent('');
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Failed to post comment',
      });
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (loading) return <div>Loading...</div>;

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
                title: 'Watch Detail',
              },
            ]}
          />
        </section>

        <section className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 px-4 pt-10">
          <div className="flex flex-col items-center">
            <div
              className={`overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem] transition-transform duration-300 ease-in-out ${
                watch.Automatic
                  ? 'hover:animate-bounce border-4 border-green-500'
                  : ''
              }`}
            >
              <Image
                src={watch.image}
                alt={watch.image}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:col-span-2">
              <Typography.Title level={2} className="text-gray-800">
                {watch.watchName} {'     '}
                {watch.Automatic ? (
                  <Tag color="green">Automatic</Tag>
                ) : (
                  <Tag color="magenta">Manual</Tag>
                )}
              </Typography.Title>
              <Typography.Text className="text-gray-900 opacity-60 pt-1">
                @{watch.brand.brandName}
              </Typography.Text>
            </div>

            <Divider />

            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                <Typography.Text strong className="text-gray-900">
                  Price: ${watch.price}
                </Typography.Text>
              </div>
            </div>

            <Divider />

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              <div>
                <Typography.Title level={4}>Description</Typography.Title>
                <div className="space-y-6">
                  <Typography.Text className="text-base text-gray-900">
                    {watch.watchDescription}
                  </Typography.Text>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-10 py-8">
          {token ? (
            <div className="p-6 bg-white rounded-lg shadow-md mb-10">
              <Title level={3} className="font-semibold text-lg pb-4">
                Comment <CommentOutlined />
              </Title>
              <Form onFinish={handleSubmit} layout="horizontal">
                <Form.Item label="Rating">
                  <Rate count={3} onChange={setRating} value={rating} />
                </Form.Item>
                <Form.Item label="Content">
                  <TextArea
                    rows={1}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write your review here"
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </Form.Item>
                <Form.Item>
                  <ConfigAntdButton type="primary">
                    <Button
                      type="primary"
                      htmlType="submit"
                      disabled={addCommentMutation.isLoading}
                      className="w-full text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
                    >
                      Post
                    </Button>
                  </ConfigAntdButton>
                </Form.Item>
              </Form>
            </div>
          ) : (
            <div></div>
          )}
          <h1 className="font-semibold text-lg pb-4">
            View Comments <Tag color="blue">{watch.comments.length}</Tag>
          </h1>
          {watch.comments.length > 0 ? (
            watch.comments.map((comment) => (
              <div
                key={comment._id}
                className="bg-white shadow-md rounded-md p-4 mb-4"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="font-semibold">
                    Rating:
                    <Rate
                      count={3}
                      disabled
                      value={comment.rating}
                      className="ml-2"
                    />
                  </div>
                  {token && comment.author._id === member.id ? (
                    <Dropdown
                      placement="bottomRight"
                      items={ViewCommentsOptionDropdown(
                        comment._id,
                        comment.rating,
                        comment.content,
                      )}
                    />
                  ) : (
                    <div></div>
                  )}
                </div>
                <p className="text-gray-800">{comment.content}</p>
                <div className="mt-2">
                  <p className="text-sm text-gray-600">
                    Author: {comment.author.membername}
                  </p>
                  <p className="text-xs text-gray-400">
                    Posted on:{' '}
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <Empty description="No comments available" />
          )}
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
