import { atom } from 'recoil';

export const lightAndDarkThemeAtom = atom<boolean>({
  key: 'lightAndDarkThemeAtom',
  default: false,
});
