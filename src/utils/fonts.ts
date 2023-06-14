import { Noto_Sans, Caveat_Brush } from 'next/font/google';

export const textFont = Noto_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const titleFont = Caveat_Brush({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
