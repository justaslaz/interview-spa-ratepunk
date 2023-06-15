import styles from '@/styles/Footer.module.scss';
import LinkLogo from '@/components/common/LinkLogo';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        {/* About */}
        <div className={styles.about}>
          <LinkLogo />
          <p>
            Ratepunk compares hotel room prices across the major online travel
            agencies. When you search for a room, Ratepunk extension scans the
            top booking sites and runs a price comparison, so you can be
            confident in knowing you&rsquo;re getting the best deal!
          </p>
          <span>
            &copy; {new Date().getFullYear()} Ratepunk. All Rights Reserved.
          </span>
        </div>

        {/* Quick Links */}
        <div className={styles.quick}>
          <h3 className={styles.title}>Quick Links</h3>
          <ul>
            <li>
              <Link href="/">Price Comparison</Link>
            </li>
            <li>
              <Link href="/">Chrome Extension</Link>
            </li>
            <li>
              <Link href="/">How It Works</Link>
            </li>
            <li>
              <Link href="/">Ratepunk Blog</Link>
            </li>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.contact}>
          <h3 className={styles.title}>Contact</h3>
          <div className={styles.contactEmail}>
            <Image
              className={styles.emailIcon}
              src="/assets/email-footer.svg"
              alt="email icon"
              width={17.393}
              height={13.8}
            />
            <a href="mailto:hi@ratepunk.com" target="_blank">
              hi@ratepunk.com
            </a>
          </div>
        </div>

        {/* Social */}
        <div className={styles.social}>
          <h3 className={styles.title}>Social</h3>
          <div className={styles.logosContainer}>
            {/* Instagram */}
            <a href="#">
              <figure className={styles.logoBox}>
                <Image
                  src="/assets/instagram.svg"
                  alt="Instagram Logo"
                  width={16.004}
                  height={16}
                />
              </figure>
            </a>
            {/* Facebook */}
            <a href="#">
              <figure className={styles.logoBox}>
                <Image
                  src="/assets/facebook.svg"
                  alt="Facebook Logo"
                  width={8.569}
                  height={16}
                />
              </figure>
            </a>
            {/* LinkedIn */}
            <a href="#">
              <figure className={styles.logoBox}>
                <Image
                  src="/assets/linkedin.svg"
                  alt="LinkedIn Logo"
                  width={16}
                  height={16}
                />
              </figure>
            </a>
            {/* Twitter */}
            <a href="#">
              <figure className={styles.logoBox}>
                <Image
                  src="/assets/twitter.svg"
                  alt="Twitter Logo"
                  width={16}
                  height={12.995}
                />
              </figure>
            </a>
            {/* TikTok */}
            <a href="#">
              <figure className={styles.logoBox}>
                <Image
                  src="/assets/tiktok.svg"
                  alt="TikTok Logo"
                  width={13.9}
                  height={16}
                />
              </figure>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
