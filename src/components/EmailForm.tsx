import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { textFont } from '@/utils/fonts';
import styles from '@/styles/EmailForm.module.scss';
import { useDebounce } from '@/hooks/useDebounce';

const mockupRefLink = 'https://ratepunk.com/referral';

const schema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email must not be empty' })
    .email({ message: 'Please provide valid email address' }),
});

type Schema = z.infer<typeof schema>;

export default function EmailForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [refBtnText, setRefBtnText] = useState('Copy');

  // Ref Button Text
  const btnTextHandler = () => {
    if (window.innerWidth <= 480) {
      setRefBtnText('Copy URL');
    }
    if (window.innerWidth > 480) {
      setRefBtnText('Copy');
    }
  };
  const debouncedBtnTextHandler = useDebounce(btnTextHandler, 300, 'trailing');

  useEffect(() => {
    btnTextHandler();
    window.addEventListener('resize', debouncedBtnTextHandler);
    return () => window.removeEventListener('resize', debouncedBtnTextHandler);
  }, [debouncedBtnTextHandler]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Schema> = (data) => {
    console.log('entered email:', data.email);
    setIsSuccess(true);
  };

  return (
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

      {!isSuccess && (
        <>
          {/* Input Email */}
          <div className={styles.emailInput}>
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
          {/* Submit Button */}
          <button className={styles.refBtn} type="submit">
            Get Referral Link
          </button>
        </>
      )}

      {isSuccess && (
        <div className={styles.copyContainer}>
          <div className={styles.copyInput}>
            <input
              type="text"
              value={mockupRefLink}
              readOnly
              className={textFont.className}
            />
          </div>
          <button
            className={styles.copyBtn}
            type="button"
            onClick={() => navigator.clipboard.writeText(mockupRefLink)}
          >
            {refBtnText}
          </button>
        </div>
      )}
    </form>
  );
}
