import styles from '@/styles/Navbar.module.scss';
import { textFont } from '@/utils/fonts';
import Link from 'next/link';
import LinkLogo from './common/LinkLogo';

export default function Navbar() {
  return (
    <header className={`${styles.header} ${textFont.className}`}>
      <nav className={styles.nav}>
        <LinkLogo />

        {/* Nav Links */}
        <div className={styles.links}>
          <Link href="/">Chrome Extension</Link>
          <Link href="/">Price Comparison</Link>
          <Link href="/">Blog</Link>
        </div>
      </nav>
    </header>
  );
}
