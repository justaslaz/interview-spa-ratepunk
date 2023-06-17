import { Dialog } from '@headlessui/react';
import styles from '@/styles/MobileMenu.module.scss';
import LinkLogo from './common/LinkLogo';
import Image from 'next/image';
import Link from 'next/link';

type ComponentProps = {
  open: boolean;
  onClose: () => void;
  links: { name: string; href: string }[];
};

export default function MobileMenu({ open, onClose, links }: ComponentProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <div className={styles.backdrop} />
      <Dialog.Panel className={styles.modal}>
        <div className={styles.header}>
          <figure onClick={onClose}>
            <LinkLogo />
          </figure>
          <button className={styles.closeBtn} type="button" onClick={onClose}>
            <span className={styles.srOnly}>Close mobile menu</span>
            <Image
              className={styles.closeIcon}
              src="/assets/close.svg"
              alt="close menu"
              width={18}
              height={18}
              aria-hidden="true"
            />
          </button>
        </div>

        <Dialog.Description className={styles.links} as="ul">
          {links.map((link) => (
            <li key={link.name}>
              <Link className={styles.link} href={link.href} onClick={onClose}>
                {link.name}
              </Link>
            </li>
          ))}
        </Dialog.Description>
      </Dialog.Panel>
    </Dialog>
  );
}
