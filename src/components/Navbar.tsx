import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Navbar.module.scss';
import LinkLogo from './common/LinkLogo';
import MobileMenu from './MobileMenu';

const menuLinks = [
  { name: 'Chrome Extension', href: '/' },
  { name: 'Price Comparison', href: '/' },
  { name: 'Blog', href: '/' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <LinkLogo />

        {/* Nav Links */}
        <ul className={styles.links}>
          {menuLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className={styles.mobileBtnBox}>
          <button
            className={styles.mobileBtn}
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className={styles.srOnly}>Open mobile menu</span>
            <Image
              className={styles.menuIcon}
              src="/assets/menu.svg"
              alt="mobile menu"
              width={20.285}
              height={18}
              aria-hidden="true"
            />
          </button>
        </div>
      </nav>

      <MobileMenu
        open={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={menuLinks}
      />
    </header>
  );
}
