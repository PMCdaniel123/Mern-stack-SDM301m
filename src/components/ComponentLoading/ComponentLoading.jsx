import { CircularProgress } from '@mui/material';
import { styled } from '@mui/system';

const Loading = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(256, 256, 256, 0.5)',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1,
});

const ComponentLoading = () => {
  return (
    <Loading>
      <CircularProgress />
    </Loading>
  );
};

export default ComponentLoading;
