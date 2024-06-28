import React from 'react';
import { useGetWatchById } from '@/features/UpdateWatches/useGetWatchById';
import { Rate, Empty, Image, Divider, Typography, Tag, Breadcrumb } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { PATHS } from '@/constant/path';

const WatchDetail = () => {
  const { watchId } = useParams();
  const { data: watch, isLoading } = useGetWatchById(watchId);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-9">
      <div>
        <section className="px-10 py-2">
          <Breadcrumb
            items={[
              {
                title: (
                  <Link to={PATHS.ADMIN.WATCHES}>
                    <span>Watches List</span>
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
          <h1 className="font-semibold text-lg pb-4">View Comments</h1>
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

export default WatchDetail;
