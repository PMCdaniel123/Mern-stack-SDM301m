import React, { useState } from 'react';
import { useGetWatchById } from '@/features/UpdateWatches/useGetWatchById';
import { Button, Rate, Form, Input, Empty } from 'antd';
import { useParams } from 'react-router-dom';
import { ViewCommentsOptionDropdown } from '@/constant/menu-data';
import { useSelector } from 'react-redux';
import useAddComment from './useAddComment';
import Dropdown from '@/components/Dropdown/Dropdown';
import useGetMemberInfor from '../ProfilePage/useGetProfile';

const ProductDetail = () => {
  const { watchId } = useParams();
  const { data: watch, isLoading } = useGetWatchById(watchId);
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');
  const addCommentMutation = useAddComment(watchId);
  const token = useSelector((state) => state.auth.token);
  const { data: member, isLoading: loading } = useGetMemberInfor();

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
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <section className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={watch.image}
                alt={watch.image}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* watch info */}
          <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:col-span-2">
              <h1 className="text-lg lg:text-xl font-semibold text-gray-800">
                {watch.watchName}
              </h1>
              <h1 className="text-lg lg:text-xl tracking-tight text-gray-900 opacity-60 pt-1">
                {watch.brand.brandName}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">watch information</h2>
              <div className="flex space-x-5 items-center text-lg lg:text-x1 text-gray-900 mt-6">
                <p className="font-semibold">{watch.price}</p>
              </div>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {watch.watchDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-6">
          <h1 className="font-semibold text-lg pb-4">View Comments</h1>
          {watch.comments.length > 0 ? (
            watch.comments.map((comment) => (
              <div
                key={comment._id}
                className="bg-white shadow-md rounded-md p-4 mb-4"
              >
                <div className="font-semibold">
                  Rating:
                  <Rate count={3} disabled defaultValue={comment.rating} />
                </div>
                <p>{comment.content}</p>
                <p className="text-sm text-gray-600">
                  Author: {comment.author.membername}
                </p>
                <p className="text-xs text-gray-400">
                  Posted on: {new Date(comment.createdAt).toLocaleDateString()}
                </p>
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
            ))
          ) : (
            <Empty description="No comments available" />
          )}

          <h1 className="font-semibold text-lg pb-4">Post a Review & Rating</h1>
          <Form onFinish={handleSubmit}>
            <Form.Item>
              <Rate count={3} onChange={setRating} value={rating} />
            </Form.Item>
            <Form.Item>
              <Input.TextArea
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your review here"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                disabled={addCommentMutation.isLoading}
              >
                Submit Review
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
