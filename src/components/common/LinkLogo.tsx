import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/LinkLogo.module.scss';

export default function LinkLogo() {
  return (
    <Link href="/">
      <span className={styles.srOnly}>Company</span>
      <figure className={styles.logoBox}>
        <Image
          className={styles.logo}
          src="/assets/logo.svg"
          height={315.52}
          width={821.97}
          alt="Logo"
        />
      </figure>
    </Link>
  );
}
