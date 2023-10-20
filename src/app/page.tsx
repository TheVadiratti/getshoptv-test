import BannerQr from '@/widgets/banner-qr';
import Styles from './page.module.css';

export default function Home() {
  return (
    <main className={Styles.main}>
      <video className={Styles.video} src="/video/1.mp4" autoPlay loop muted />
      <BannerQr extraClass={Styles.bannerQr} />
    </main>
  );
}
