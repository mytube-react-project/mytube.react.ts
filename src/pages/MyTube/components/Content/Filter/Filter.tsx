import { useState } from 'react';
import * as S from './style';

type FilterType = {
  type: string;
  name: string;
  checked: boolean;
};

function Filter() {
  const [filters, setFilters] = useState<FilterType[]>([
    {
      type: 'all',
      name: 'all',
      checked: true,
    },
    {
      type: 'already',
      name: 'already',
      checked: false,
    },
    {
      type: 'marked',
      name: 'marked',
      checked: false,
    },
  ]);

  const getSelectedData = (type: string) => {
    const filterList = [...filters];
    filterList.forEach((item) =>
      item.type === type ? (item.checked = true) : (item.checked = false),
    );
    setFilters(filterList);
  };

  return (
    <S.FilterWrapper>
      {filters.map((item, index) => (
        <div
          key={index}
          onClick={() => getSelectedData(item.type)}
          className={`${item.checked === true ? 'select' : ''}`}
        >
          {item.name}
        </div>
      ))}
    </S.FilterWrapper>
  );
}

export default Filter;
