import styles from '@/styles/ReferSteps.module.scss';
import { textFont, titleFont } from '@/utils/fonts';
import Image from 'next/image';

export default function ReferSteps() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        {/* Refer Form */}
        <div className={styles.referBox}>
          <h2 className={titleFont.className}>Refer Friends and Get Rewards</h2>
          <p>
            Refer your friends to us and earn hotel booking vouchers. We&apos;ll
            give you 1 coin for each friend that installs our extension. Minimum
            cash-out at 20 coins.
          </p>

          <div className={styles.referForm}>
            <div className={styles.inputContainer}>
              <Image
                className={styles.image}
                src="/assets/email.svg"
                alt="email"
                height={22}
                width={18.343}
              />
              <input
                className={textFont.className}
                placeholder="Enter your email address"
              />
            </div>
            <button type="submit">Get Referral Link</button>
          </div>

          <span>Limits on max rewards apply.</span>
        </div>

        {/* Steps */}
        <div className={styles.stepsBox}>
          {/* Step 1 */}
          <div className={styles.stepContainer}>
            <figure className={styles.stepImage}>
              <Image
                className={styles.image}
                src="/assets/invite.svg"
                alt="invite"
                width={144}
                height={144}
              />
            </figure>
            <div className={styles.stepText}>
              <span>Step 1</span>
              <h3 className={titleFont.className}>Invite Friends</h3>
              <p>Refer friends with your unique referral link.</p>
            </div>
          </div>
          {/* Step 2 */}
          <div className={styles.stepContainer}>
            <div className={styles.stepText}>
              <span>Step 2</span>
              <h3 className={titleFont.className}>Collect Coins</h3>
              <p>
                Get 1 coin for each friend that installs our extension using
                your referral link.
              </p>
            </div>
            <figure className={styles.stepImage}>
              <Image
                src="/assets/collect-coins.svg"
                alt="collect coins"
                width={144}
                height={144}
              />
            </figure>
          </div>
          {/* Step 3 */}
          <div className={styles.stepContainer}>
            <figure className={styles.stepImage}>
              <Image
                src="/assets/voucher.svg"
                alt="voucher"
                width={144}
                height={144}
              />
            </figure>
            <div className={styles.stepText}>
              <span>Step 3</span>
              <h3 className={titleFont.className}>Get Voucher</h3>
              <p>
                Redeem for a $20 hotel booking voucher once you collect 20
                coins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
