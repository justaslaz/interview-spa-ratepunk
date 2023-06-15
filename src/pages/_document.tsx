import { Html, Head, Main, NextScript } from 'next/document';
import { textFont } from '@/utils/fonts';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={textFont.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
