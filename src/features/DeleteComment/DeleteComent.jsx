import { Button, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { closePopup } from '@/store/reducers/popupReducer';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';
import { useParams } from 'react-router-dom';
import { useDeleteComment } from './useDeleteComment';

const DeleteComment = ({ commentId }) => {
  const { watchId } = useParams();
  const dispatch = useDispatch();
  const deleteComment = useDeleteComment({ watchId, commentId });

  const handleCancel = () => {
    dispatch(closePopup('Delete Comment'));
  };

  const handleDelete = () => {
    deleteComment.mutate();
  };

  return (
    <div className="px-6 py-2">
      <Typography.Text>Are you sure to delete this comment?</Typography.Text>
      <div className="flex flex-row gap-1 justify-center p-4 mt-2">
        <ConfigAntdButton type="danger">
          <Button type="primary" onClick={handleCancel}>
            Cancel
          </Button>
        </ConfigAntdButton>
        <ConfigAntdButton>
          <Button type="primary" onClick={handleDelete}>
            Delete
          </Button>
        </ConfigAntdButton>
      </div>
    </div>
  );
};

export default DeleteComment;
