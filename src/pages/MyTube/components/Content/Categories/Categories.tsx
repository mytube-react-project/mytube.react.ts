import * as S from './style';
import { MenuItem } from '@mui/material';
import SubCategories from './SubCategories/SubCategories';
import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

type CategoryChildrenType = {
  id: number;
  cate: string;
};

type CategortType = {
  id: number;
  name: string;
  open: boolean;
  children: Array<CategoryChildrenType>;
};

function Categories() {
  const [categoryList, setCategoryList] = useState<CategortType[]>([
    {
      id: 1,
      name: 'STUDY',
      open: true,
      children: [
        {
          id: 1,
          cate: 'JavaScript',
        },
        {
          id: 2,
          cate: 'React',
        },
        {
          id: 3,
          cate: 'Angular',
        },
        {
          id: 4,
          cate: 'NodeJs',
        },
      ],
    },
    {
      id: 2,
      name: 'COOKING',
      open: true,
      children: [
        { id: 1, cate: 'Cake' },
        { id: 3, cate: 'Chocolate' },
      ],
    },
    {
      id: 3,
      name: 'MUSIC',
      open: true,
      children: [
        { id: 1, cate: 'Hiphop' },
        { id: 2, cate: 'Jazz' },
        { id: 3, cate: 'Rofi' },
        { id: 4, cate: 'R&B' },
      ],
    },
  ]);

  const onToggleCategory = (id: number) => {
    const cate_copy = [...categoryList];
    const selectCate = cate_copy.find((cate) => cate.id === id);
    if (!selectCate) return;
    selectCate.open = !selectCate.open;
    setCategoryList(cate_copy);
  };

  return (
    <S.CategoryWrapper>
      <MenuItem className="firstCategory">ALL</MenuItem>
      {categoryList.map((cate) => (
        <React.Fragment key={cate.id}>
          <MenuItem className="firstCategory" onClick={() => onToggleCategory(cate.id)}>
            {cate.name}
            {cate.open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </MenuItem>
          <SubCategories visibility={cate.open}>
            {cate.children.map((data) => (
              <MenuItem style={{ fontSize: '14px' }} key={data.id}>
                {data.cate}
              </MenuItem>
            ))}
          </SubCategories>
        </React.Fragment>
      ))}
    </S.CategoryWrapper>
  );
}

export default Categories;
