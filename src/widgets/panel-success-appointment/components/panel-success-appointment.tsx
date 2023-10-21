import { memo } from 'react';
import Styles from './panel-success-appointment.module.css';

const PanelSuccessAppointment = memo(() => (
  <div className={Styles.panel}>
    <h2 className={Styles.heading}>
      ЗАЯВКА
      <br /> ПРИНЯТА
    </h2>
    <p className={Styles.hint}>
      Держите телефон под рукой.
      <br /> Скоро с Вами свяжется наш менеджер.
    </p>
  </div>
));

export default PanelSuccessAppointment;
