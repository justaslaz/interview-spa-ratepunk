import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { textFont } from '@/utils/fonts';
import styles from '@/styles/EmailForm.module.scss';
import { useDebounce } from '@/hooks/useDebounce';
import LoaderIcon from 'remixicon-react/Loader4LineIcon';

const mockupRefLink = 'https://company.com/referral';

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

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Schema> = async (data) => {
    try {
      const response = await fetch('/api/hello', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Request failed');

      const json = await response.json();

      setIsSuccess(true);
      console.log('Last Entered:', json.record.email);
    } catch (err) {
      setIsSuccess(false);
      console.error(err);
    }
  };

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
            {isSubmitting ? (
              <LoaderIcon className={styles.loaderIcon} />
            ) : (
              'Get Referral Link'
            )}
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
