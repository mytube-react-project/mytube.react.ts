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
  const { data } = useGetCateListQuery();
  const [firstCategoryId, setFirstCategoryId] = useRecoilState(firstCategoryIdAtom);
  const [allCategories, setAllCategories] = useRecoilState(allCategorySelector);
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);

  useEffect(() => {
    console.log(allCategories);
    if (!data) return;
    setCategoryList([...data]);
    setFirstCategoryId(data[0].id);
  }, [data]);

  const onToggleCategory = (id: number) => {
    console.log(id);
    // const cate_copy = [...categoryList];
    // const selectCate = cate_copy.find((cate) => cate.id === id);
    // console.log(selectCate);
    // if (!selectCate) return;
    // selectCate.open = !selectCate.open;
    // setCategoryList(cate_copy);

    // setAllCategories((prev) => {
    //   const _prev: any = [...prev];
    //   const select: any = _prev.findIndex((cate: any) => cate.id === id);
    //   _prev[select].open = true;
    //   return [...prev];
    // });
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
