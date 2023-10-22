'use client';

import { useState, useCallback, createContext, useMemo } from 'react';
import type { ReactNode, Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ButtonClose from '@/shared/components/button-close/button-close';
import Styles from './layout.module.css';

export const FocusContext = createContext<{
  currFocus: number,
  setCurrFocus: Dispatch<SetStateAction<number>>,
} | null>(null);

function AppointmentLayout({ children }: { children: ReactNode }) {
  const [currFocus, setCurrFocus] = useState(1);

  const focusState = useMemo(() => ({ currFocus, setCurrFocus }), [currFocus]);

  const router = useRouter();

  const handleCloseButton = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <main className={Styles.main}>
      <FocusContext.Provider value={focusState}>
        {children}
      </FocusContext.Provider>
      <div className={Styles.overlay}>
        <ButtonClose
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
}

export default AppointmentLayout;
