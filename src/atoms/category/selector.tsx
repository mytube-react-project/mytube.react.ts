import { selector } from 'recoil';
import { SelectorKeyConsts } from 'libs/consts/selectorKey';
import { firstCategoryIdAtom, allCategoryAtom } from './atom';

export const allCategorySelector = selector({
  key: SelectorKeyConsts.ALL_CATEGORY_SELECTOR,
  get: ({ get }) => {
    const categories = get(allCategoryAtom);
    const open = { open: false };
    const result = categories.map((value: any) => {
      value.assign(open);
    });
    return result;
  },
  set: ({ set }, value) => {
    console.log('value', value);
  },
});

export const firstCategoryIdSelector = selector({
  key: SelectorKeyConsts.FIRST_CATEGORY_ID_SELECTOR,
  get: ({ get }) => {
    const currentFirstCate = get(firstCategoryIdAtom);
    return currentFirstCate;
  },
  set: ({ set }, newValue) => {
    const selectorFirstCate = newValue;
    set(firstCategoryIdAtom, selectorFirstCate);
  },
});
