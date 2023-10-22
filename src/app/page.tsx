'use client';

import BannerQr from '@/widgets/banner-qr';
import Video from '@/widgets/video';
import Styles from './page.module.css';

export default function Home() {
  return (
    <main className={Styles.main}>
      <Video />
      <BannerQr extraClass={Styles.bannerQr} />
    </main>
  );
}
