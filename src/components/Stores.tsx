import styles from '@/styles/Stores.module.scss';
import Image from 'next/image';
import { textFont, gadugiFont } from '@/utils/fonts';
import StarIcon from 'remixicon-react/StarFillIcon';

export default function Stores() {
  return (
    <aside className={styles.aside}>
      <div className={styles.content}>
        <div className={styles.btnContainer}>
          {/* Chrome Store */}
          <button className={styles.storeBtn}>
            <figure>
              <Image
                className={styles.logo}
                src="/assets/chrome.svg"
                alt="Chrome Store"
                height={42}
                width={42}
              />
            </figure>

            <div className={styles.btnTextContainer}>
              <span className={textFont.className}>available in the</span>
              <span className={gadugiFont.className}>chrome web store</span>
            </div>
          </button>
          {/* Apple Store */}
          <button className={styles.storeBtn}>
            <figure>
              <Image
                className={styles.logo}
                src="/assets/apple.svg"
                alt="Apple Store"
                height={42}
                width={42}
              />
            </figure>

            <div className={styles.btnTextContainer}>
              <span className={textFont.className}>available in the</span>
              <span className={gadugiFont.className}>apple app store</span>
            </div>
          </button>
        </div>

        {/* Review */}
        <div className={styles.reviewContainer}>
          <div className={styles.starsContainer}>
            <StarIcon color="white" size="1.25rem" />
            <StarIcon color="white" size="1.25rem" />
            <StarIcon color="white" size="1.25rem" />
            <StarIcon color="white" size="1.25rem" />
            <StarIcon color="white" size="1.25rem" />
          </div>
          <span>Chrome Store reviews</span>
        </div>
      </div>
    </aside>
  );
}

{
  /* 
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
         */
}
