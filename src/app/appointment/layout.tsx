'use client';

import { ReactNode, useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ButtonClose from '@/shared/components/button-close/button-close';
import Styles from './layout.module.css';

function AppointmentLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  const handleCloseButton = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <main className={Styles.main}>
      {children}
      <div className={Styles.overlay}>
        <ButtonClose
          extraClass={Styles.closeButton}
          onClick={handleCloseButton}
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
