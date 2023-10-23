'use client';

import { memo, useCallback, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import CloseIcon from '@/shared/assets/icons/Close';
import Button from '@/shared/components/button/button';
import useUserInactivity from '@/shared/lib/hooks/useUserInactivity';
import FocusContext from '../../model/context/focus';
import Styles from './layout.module.css';

interface Props {
  children: ReactNode;
}

const AppointmentLayout = memo(({ children }: Props) => {
  const [currFocus, setCurrFocus] = useState(1);
  const router = useRouter();
  const onUserInactivity = useCallback(() => {
    router.replace('/');
  }, [router]);

  // отслеживание бездействия пользователя
  useUserInactivity({
    inactiveCallback: onUserInactivity,
    delay: 5000,
  });

  const focusState = useMemo(() => ({ currFocus, setCurrFocus }), [currFocus]);

  const handleCloseButton = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <main className={Styles.main}>
      <FocusContext.Provider value={focusState}>
        {children}
      </FocusContext.Provider>
      <div className={Styles.overlay}>
        <Button
          label={CloseIcon()}
          extraClass={Styles.closeButton}
          onClick={handleCloseButton}
          isFocus={currFocus === 14}
        />
        <div className={Styles.qrCnt}>
          <p className={Styles.hint}>
            Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
          </p>
          <Image
            src="/images/qr-code.png"
            width={110}
            height={110}
            alt="QR код"
          />
        </div>
      </div>
    </main>
  );
});

export default AppointmentLayout;
