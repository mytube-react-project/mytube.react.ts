import { atom } from 'recoil';
import { AtomKeyConsts } from 'libs/consts/atomKey';

export const allCategoryAtom = atom({
  key: AtomKeyConsts.ALL_CATEGORY,
  default: [],
});

export const firstCategoryIdAtom = atom({
  key: AtomKeyConsts.FIRST_CATEGORY_ID_ATOM,
  default: 0,
});
