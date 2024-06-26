import { closePopup } from '@/store/reducers/popupReducer';
import { Button, Rate } from 'antd';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Form, useParams } from 'react-router-dom';
import { Input } from 'postcss';
import useUpdateComment from './useUpdateComment';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';
import { useForm } from 'react-hook-form';

const UpdateComment = ({ commentId, initialRating, initialContent }) => {
  const dispatch = useDispatch();
  const { watchId } = useParams();
  const updateComment = useUpdateComment();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      rating: initialRating,
      content: initialContent,
    },
  });

  const rating = watch('rating');
  const content = watch('content');

  useEffect(() => {
    setValue('rating', initialRating);
    setValue('content', initialContent);
  }, [initialRating, initialContent, setValue]);

  const onSubmit = (data) => {
    updateComment.mutate({
      watchId: watchId,
      commentId: commentId,
      rating: data.rating,
      content: data.content,
    });
  };

  const handleCancel = () => {
    dispatch(closePopup('Update Comment'));
  };

  return (
    <div className="p-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Rating</h1>
          <div className="w-3/4">
            <Rate
              count={3}
              value={rating}
              onChange={(value) => setValue('rating', value)}
            />
          </div>
        </div>
        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Content</h1>
          <div className="w-3/4">
            <textarea
              rows={4}
              value={content}
              placeholder="Write your review here"
              {...register('content', {
                required: 'Write your review',
              })}
            />
            {errors.content && (
              <span className="text-red-500 text-sm">
                {errors.content.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-row gap-1 justify-center p-4">
          <ConfigAntdButton type="danger">
            <Button type="primary" onClick={handleCancel}>
              Cancel
            </Button>
          </ConfigAntdButton>
          <ConfigAntdButton>
            <Button type="primary" onClick={handleSubmit(onSubmit)}>
              Update
            </Button>
          </ConfigAntdButton>
        </div>
      </form>
    </div>
  );
};

export default UpdateComment;
