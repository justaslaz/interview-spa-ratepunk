import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/LinkLogo.module.scss';

export default function LinkLogo() {
  return (
    <Link href="/">
      <span className={`${styles['sr-only']}`}>RatePunk</span>
      <Image
        className={styles.logo}
        src="/assets/logo.svg"
        height={32}
        width={125.054}
        alt="RatePunk Logo"
      />
    </Link>
  );
}
