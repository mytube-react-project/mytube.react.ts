import React from 'react';
import styled from 'styled-components';

interface SubCategoriesType {
  visibility: boolean;
  children: React.ReactNode;
}

function SubCategories(props: SubCategoriesType) {
  return <SubCategoriesWrapper>{props.visibility && props.children}</SubCategoriesWrapper>;
}

export default SubCategories;

export const SubCategoriesWrapper = styled.div`
  padding-left: 12px;
`;
