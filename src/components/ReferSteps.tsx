import styles from '@/styles/ReferSteps.module.scss';
import { textFont, titleFont } from '@/utils/fonts';
import Image from 'next/image';
import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const schema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email must not be empty' })
    .email({ message: 'Please provide valid email address' }),
});

type Schema = z.infer<typeof schema>;

export default function ReferSteps() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Schema> = (data) => {
    setIsSuccess(true);
  };

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

          <form onSubmit={handleSubmit(onSubmit)} className={styles.referForm}>
            {/* Success message */}
            {isSubmitSuccessful && isSuccess && (
              <div className={styles.successBox}>
                <figure>
                  <Image
                    className={styles.successIcon}
                    src="/assets/success.svg"
                    alt="success"
                    width={32}
                    height={32}
                  />
                </figure>
                <span>Your email is confirmed!</span>
              </div>
            )}
            {/* Input Email */}
            <div className={styles.inputContainer}>
              <p className={styles.errorMsg}>{errors.email?.message}</p>
              <Image
                className={styles.image}
                src="/assets/email.svg"
                alt="email"
                height={22}
                width={18.343}
              />
              <input
                type="text"
                placeholder="Enter your email address"
                className={textFont.className}
                {...register('email')}
              />
            </div>
            <button type="submit">Get Referral Link</button>
          </form>

          <span className={styles.disclaimer}>
            Limits on max rewards apply.
          </span>
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
