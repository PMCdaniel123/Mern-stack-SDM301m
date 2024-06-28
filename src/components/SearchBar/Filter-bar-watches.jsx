import { Select, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '@/store/reducers/watchReducer';
import useGetBrandsList from '@/pages/BrandsPage/useGetBrandsList';

export default function WatchFilterBar() {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetBrandsList();
  const filters = useSelector((state) => state.watch.brandNames);
  console.log(filters);

  const SelectOptions = () => {
    if (!data) return [];
    return data.map((brand) => ({
      label: brand.brandName,
      value: brand.brandName,
    }));
  };
  console.log(SelectOptions());

  const handleType = (value) => {
    console.log(value);
    dispatch(setFilter({ key: 'brandNames', value }));
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="px-6 py-4">
      <Typography className="my-2">Filter by</Typography>
      <Select
        mode="multiple"
        allowClear
        className="w-full"
        placeholder="Please select"
        defaultValue={filters}
        value={filters}
        onChange={handleType}
        options={SelectOptions()}
      />
    </div>
  );
}
