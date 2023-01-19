import * as S from './style';
import { MenuItem } from '@mui/material';
import SubCategories from './SubCategories/SubCategories';
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useGetCateListQuery from 'queries/useGetAllCategory';
import { useQueryClient } from '@tanstack/react-query';
import { QueryKeyConsts } from 'libs/consts/qureyKey';
import { FirstCategoryType } from 'types/Category';

function Categories() {
  const { data: categoryList } = useGetCateListQuery();
  const qureyClient = useQueryClient();

  const onToggleCategory = (id: number) => {
    const newCategoryList = categoryList.map((cate: FirstCategoryType) => {
      if (cate.id === id) {
        return { ...cate, isToggleOn: !cate.isToggleOn };
      }
      return cate;
    });
    qureyClient.setQueryData([QueryKeyConsts.GET_ALL_CATE], newCategoryList);
  };

  return (
    <S.CategoryWrapper>
      <MenuItem className="firstCategory">ALL</MenuItem>
      {categoryList &&
        categoryList.map((cate: any) => (
          <React.Fragment key={cate.id}>
            <MenuItem className="firstCategory" onClick={() => onToggleCategory(cate.id)}>
              {cate.name}
              {cate.isToggleOn ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </MenuItem>
            <SubCategories visibility={cate.isToggleOn}>
              {cate.children?.map((data: any) => (
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
