import * as S from './style';
import { MenuItem } from '@mui/material';
import SubCategories from './SubCategories/SubCategories';
import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useGetCateListQuery from 'queries/useGetAllCategory';
import { firstCategoryIdAtom, allCategoryAtom } from 'atoms/category/atom';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { allCategorySelector } from 'atoms/category/selector';
import { useQueryClient } from '@tanstack/react-query';
import { QueryKeyConsts } from 'libs/consts/qureyKey';

type CategoryChildrenType = {
  id: number;
  cate: string;
};

type CategoryType = {
  id: number;
  name: string;
  open: boolean;
  children: Array<CategoryChildrenType>;
};

function Categories() {
  const { data: categoryList } = useGetCateListQuery();
  const qureyClient = useQueryClient();

  // const [allCategories, setAllCategories] = useRecoilState(allCategorySelector);

  console.log(categoryList);

  const onToggleCategory = (id: number) => {
    const newCategoryList = categoryList.map((cate: CategoryType) => {
      if (cate.id === id) {
        return { ...cate, open: !cate.open };
      }
      return cate;
    });
    qureyClient.setQueryData([QueryKeyConsts.GET_FIRST_CATE], newCategoryList);
  };

  return (
    <S.CategoryWrapper>
      <MenuItem className="firstCategory">ALL</MenuItem>
      {categoryList &&
        categoryList.map((cate: any) => (
          <React.Fragment key={cate.id}>
            <MenuItem className="firstCategory" onClick={() => onToggleCategory(cate.id)}>
              {cate.name}
              {cate.open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </MenuItem>
            <SubCategories visibility={cate.open}>
              {cate.children.map((data: any) => (
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
