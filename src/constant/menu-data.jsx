import {
  CloseCircleOutlined,
  EditOutlined,
  HomeOutlined,
  ProductOutlined,
  ShopOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { PATHS } from './path';
import Popup from '@/components/Popup/Popup';
import DeleteBrand from '@/features/DeleteBrands/DeleteBrand';
import UpdateBrand from '@/features/UpdateBrands/UpdateBrand';
import DeleteWatch from '@/features/DeleteWatches/DeleteWatch';
import UpdateWatch from '@/features/UpdateWatches/UpdateWatch';

// Navigation Sider
// eslint-disable-next-line react-refresh/only-export-components
export const MenuItems = [
  {
    label: 'Home',
    key: PATHS.ADMIN.HOME,
    icon: <HomeOutlined />,
  },
  {
    label: 'Brands',
    key: PATHS.ADMIN.BRANDS,
    icon: <ShopOutlined />,
  },
  {
    label: 'Watches',
    key: PATHS.ADMIN.WATCHES,
    icon: <ProductOutlined />,
  },
  {
    label: 'Accounts',
    key: PATHS.ADMIN.ACCOUNTS,
    icon: <UserOutlined />,
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
