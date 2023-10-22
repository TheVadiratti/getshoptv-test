'use client';

import { memo, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '@/shared/components/button/button';
import Styles from './banner-qr.module.css';

interface Props {
  extraClass?: string;
}

const BannerQr = memo(({ extraClass }: Props) => {
  const router = useRouter();

  const handleOkClick = useCallback(() => {
    router.push('/appointment');
  }, [router]);

  const classNames = useMemo(() => {
    const classes = [Styles.banner];

    if (extraClass) {
      classes.push(extraClass);
    }

    return classes;
  }, [extraClass]);

  return (
    <div className={classNames.join(' ')}>
      <h2 className={Styles.heading}>
        ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!
        <br />
        ПОДАРИТЕ ЕМУ СОБАКУ!
      </h2>
      <div className={Styles.qrCnt}>
        <Image
          src="/images/qr-code.png"
          width={126}
          height={126}
          alt="QR код"
        />
        <p className={Styles.hint}>Сканируйте QR-код или нажмите ОК</p>
      </div>
      <Button
        label="ok"
        onClick={handleOkClick}
        extraClass={Styles.button}
        autoFocus
      />
    </div>
  );
});

export default BannerQr;
