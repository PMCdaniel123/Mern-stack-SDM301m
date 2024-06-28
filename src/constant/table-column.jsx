import Dropdown from '@/components/Dropdown/Dropdown';
import {
  ViewBrandsOptionDropdown,
  ViewWatchesOptionDropdown,
} from './menu-data';
import { Image, Tag } from 'antd';

export const BrandsColumn = [
  {
    title: 'Brand Name',
    dataIndex: 'brandName',
    width: 500,
    key: 'brandName',
  },
  {
    title: 'Action',
    key: 'operation',
    width: 500,
    align: 'center',
    render: (record) => {
      const items = ViewBrandsOptionDropdown(record._id, record.brandName);
      return <Dropdown items={items} />;
    },
  },
];

export const MembersColumn = [
  {
    title: 'Member Name',
    dataIndex: 'membername',
    width: 300,
    key: 'membername',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    width: 300,
    key: 'name',
  },
  {
    title: 'Year of birth',
    dataIndex: 'YOB',
    width: 200,
    key: 'YOB',
  },
  {
    title: 'Role',
    dataIndex: 'isAdmin',
    width: 200,
    key: 'isAdmin',
    render: (isAdmin) => (isAdmin ? 'Admin' : 'Member'),
  },
];

export const WatchesColumn = [
  {
    title: 'Name',
    dataIndex: 'watchName',
    width: 300,
    key: 'watchName',
    fixed: 'left',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    width: 200,
    key: 'image',
    render: (image) => <Image width={80} src={image} />,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    width: 100,
    key: 'price',
  },
  {
    title: 'Automatic',
    dataIndex: 'Automatic',
    width: 200,
    key: 'Automatic',
    render: (Automatic) =>
      Automatic ? (
        <Tag color={'green'} key={'Automatic'}>
          {'Automatic'.toUpperCase()}
        </Tag>
      ) : (
        <Tag color={'geekblue'} key={'Manual'}>
          {'Manual'.toUpperCase()}
        </Tag>
      ),
  },
  {
    title: 'Description',
    dataIndex: 'watchDescription',
    width: 300,
    key: 'watchDescription',
  },
  {
    title: 'Brand',
    dataIndex: 'brand',
    width: 200,
    key: 'brand',
    render: (brand) => brand.brandName,
  },
  {
    title: 'Action',
    key: 'operation',
    width: 200,
    fixed: 'right',
    align: 'center',
    render: (record) => {
      const items = ViewWatchesOptionDropdown(record._id, record.watchName);
      return <Dropdown items={items} />;
    },
  },
];
