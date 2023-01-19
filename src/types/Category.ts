export type SecondCategoryType = {
  id: number;
  cate: string;
  isSelected: boolean;
};

export type FirstCategoryType = {
  id: number;
  name: string;
  children: Array<SecondCategoryType>;
  isToggleOn: boolean;
  isSelected: boolean;
};
