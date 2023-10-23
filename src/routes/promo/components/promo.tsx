import { memo } from 'react';
import Video from '@/widgets/video';
import BannerQr from '@/widgets/banner-qr';
import Styles from './promo.module.css';

const PromoPage = memo(() => (
  <main className={Styles.main}>
    <Video />
    <BannerQr extraClass={Styles.bannerQr} />
  </main>
));

export default PromoPage;
