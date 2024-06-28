import { Button, Input, Tag } from 'antd';
import {
  CloseOutlined,
  FilterOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setSearchValue } from '@/store/reducers/watchReducer';
import ConfigAntdButton from '../Button/ConfigAntdButton';
import debounce from 'debounce';
import Popup from '../Popup/Popup';
import WatchFilterBar from './Filter-bar-watches';

export default function WatchSearchBar() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.watch.searchValue);
  const filters = useSelector((state) => state.watch.brandNames);

  const handleSearch = debounce((searchValue) => {
    dispatch(setSearchValue(searchValue));
  }, 500);

  const handleClose = (item) => {
    dispatch(
      setFilter({
        key: 'brandNames',
        value: filters.filter((prevStateItem) => prevStateItem !== item),
      }),
    );
  };

  return (
    <div className="w-full">
      <div className="flex items-center space-x-3 w-96">
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search by watch name..."
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchValue}
        />
        <ConfigAntdButton type="primary">
          <Popup title="Filters" content={<WatchFilterBar />}>
            <Button type="primary" icon={<FilterOutlined />}>
              Filter
            </Button>
          </Popup>
        </ConfigAntdButton>
      </div>
      <div className="mt-3">
        <>
          {filters.map((item, index) => (
            <Tag
              key={index}
              className="inline-flex mt-1 gap-2 flex-row-reverse"
              icon={<CloseOutlined onClick={() => handleClose(item)} />}
            >
              {item}
            </Tag>
          ))}
        </>
      </div>
    </div>
  );
}
