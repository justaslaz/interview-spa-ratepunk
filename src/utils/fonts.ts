import { Noto_Sans, Caveat_Brush } from 'next/font/google';
import localFont from 'next/font/local';

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

export const gadugiFont = localFont({
  src: [
    {
      path: '../../public/fonts/gadugi-normal.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/gadugi-bold.ttf',
      weight: '700',
    },
  ],
  display: 'swap',
});
