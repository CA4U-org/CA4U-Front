import { extendTheme } from '@chakra-ui/react';
import { cauTheme } from './CAUTheme';
import { fontTheme } from './fontTheme';

// 올바른 병합
export const mergedTheme = extendTheme({
  ...cauTheme, // CAU 색상 테마
  fonts: fontTheme.fonts, // 폰트 테마 병합
  styles: {
    ...cauTheme.styles, // CAU 스타일 병합 (필요한 경우)
    global: {
      ...fontTheme.styles.global, // 폰트 스타일 병합
    },
  },
});
