import { closePopup } from '@/store/reducers/popupReducer';
import { Button, Rate } from 'antd';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useUpdateComment from './useUpdateComment';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';

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
      <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-4">
        <div className="flex mb-4">
          <h1 className="w-1/4 font-bold items-center mr-4 text-gray-700">
            Rating
          </h1>
          <div className="w-3/4">
            <Rate
              count={3}
              value={rating}
              onChange={(value) => setValue('rating', value)}
            />
          </div>
        </div>
        <div className="flex mb-4">
          <h1 className="w-1/4 font-bold items-center mr-4 text-gray-700">
            Content
          </h1>
          <div className="w-3/4">
            <textarea
              rows={4}
              value={content}
              placeholder="Write your review here"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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

        <div className="flex justify-center gap-2 p-4">
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
