import Dropdown from '@/components/Dropdown/Dropdown';
import { ViewBrandsOptionDropdown } from './menu-data';

export const BrandsColumn = [
  {
    title: 'ID',
    dataIndex: '_id',
    key: '_id',
    width: 100,
    sorter: {
      compare: (a, b) => a._id - b._id,
    },
    defaultSortOrder: 'ascend',
  },
  {
    title: 'Brand Name',
    dataIndex: 'brandName',
    width: 500,
    key: 'brandName',
  },
  {
    title: 'Action',
    key: 'operation',
    width: 200,
    align: 'center',
    render: (record) => {
      const items = ViewBrandsOptionDropdown(record._id, record.brandName);
      return <Dropdown items={items} />;
    },
  },
];
