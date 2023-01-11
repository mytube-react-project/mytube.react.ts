import { atom } from 'recoil';
import { AtomKeyConsts } from 'libs/consts/atomKey';

export const lightAndDarkThemeAtom = atom<boolean>({
  key: AtomKeyConsts.LIGHT_AND_DARK_THEME_ATOM,
  default: false,
});
