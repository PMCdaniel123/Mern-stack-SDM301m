import {
  CloseCircleOutlined,
  EditOutlined,
  FolderViewOutlined,
  HomeOutlined,
  ShopOutlined,
} from '@ant-design/icons';
import { PATHS } from './path';
import { Link } from 'react-router-dom';
import Popup from '@/components/Popup/Popup';
import DeleteBrand from '@/features/DeleteBrands/DeleteBrand';
import UpdateBrand from '@/features/UpdateBrands/UpdateBrand';
import DeleteWatch from '@/features/DeleteWatches/DeleteWatch';
import UpdateWatch from '@/features/UpdateWatches/UpdateWatch';
import DeleteComment from '@/features/DeleteComment/DeleteComent';
import UpdateComment from '@/features/UpdateComment/UpdateComment';

// Navigation Sider
// eslint-disable-next-line react-refresh/only-export-components
export const MenuItems = [
  {
    label: 'Home',
    key: PATHS.ADMIN.HOME,
  },
  {
    label: 'Brands',
    key: PATHS.ADMIN.BRANDS,
  },
  {
    label: 'Watches',
    key: PATHS.ADMIN.WATCHES,
  },
  {
    label: 'Accounts',
    key: PATHS.ADMIN.ACCOUNTS,
  },
];

// eslint-disable-next-line react-refresh/only-export-components
export const NavigationItems = [
  {
    label: 'Home',
    key: PATHS.HOME,
    icon: <HomeOutlined />,
  },
  {
    label: 'Profile',
    key: PATHS.MEMBER.PROFILE,
    icon: <ShopOutlined />,
  },
];

export const ViewBrandsOptionDropdown = (id, name) => [
  {
    label: (
      <Popup title="Update Brand" content={<UpdateBrand id={id} name={name} />}>
        Update Brand
      </Popup>
    ),
    key: 'edit',
    icon: <EditOutlined />,
  },
  {
    label: (
      <Popup title="Delete Brand" content={<DeleteBrand id={id} name={name} />}>
        Delete Brand
      </Popup>
    ),
    key: 'delete',
    icon: <CloseCircleOutlined />,
  },
];

export const ViewWatchesOptionDropdown = (id, name) => [
  {
    label: <Link to={PATHS.ADMIN.WATCHES + '/' + id}>View Detail</Link>,
    key: 'view_detail',
    icon: <FolderViewOutlined />,
  },
  {
    label: (
      <Popup title="Update Watch" content={<UpdateWatch id={id} />}>
        Update Watch
      </Popup>
    ),
    key: 'edit',
    icon: <EditOutlined />,
  },
  {
    label: (
      <Popup title="Delete Watch" content={<DeleteWatch id={id} name={name} />}>
        Delete Watch
      </Popup>
    ),
    key: 'delete',
    icon: <CloseCircleOutlined />,
  },
];

export const ViewCommentsOptionDropdown = (id, rating, content) => [
  {
    label: (
      <Popup
        title="Update Comment"
        content={
          <UpdateComment
            commentId={id}
            initialRating={rating}
            initialContent={content}
          />
        }
      >
        Update Comment
      </Popup>
    ),
    key: 'edit',
    icon: <EditOutlined />,
  },
  {
    label: (
      <Popup title="Delete Comment" content={<DeleteComment commentId={id} />}>
        Delete Comment
      </Popup>
    ),
    key: 'delete',
    icon: <CloseCircleOutlined />,
  },
];
