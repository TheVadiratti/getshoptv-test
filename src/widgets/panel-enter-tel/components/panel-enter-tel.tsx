'use client';

import { memo, useCallback, useMemo, useState } from 'react';
import Button from '@/shared/components/button/button';
import KeyboardNum, { MAX_LENGTH_INPUT_NUMBER } from '@/features/enter-tel';
import useNumberMask from '@/shared/lib/hooks/useNumberMask';
import Checkbox from '@/shared/components/checkbox/checkbox';
import Styles from './panel-enter-tel.module.css';

const PanelEnterTel = memo(() => {
  const [numberValue, setNubmerValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(false);
  const number = useNumberMask(numberValue);

  const handlePDA = useCallback(() => {
    setCheckboxValue(!checkboxValue);
  }, [checkboxValue]);

  const isValidNumber = useMemo(
    () => checkboxValue && numberValue.length === MAX_LENGTH_INPUT_NUMBER,
    [checkboxValue, numberValue],
  );

  return (
    <div className={Styles.panel}>
      <h2 className={Styles.heading}>Введите ваш номер мобильного телефона</h2>
      <p className={Styles.number}>{number}</p>
      <p className={Styles.hint}>
        и с Вами свяжется наш менеждер для дальнейшей консультации
      </p>
      <KeyboardNum setNumberValue={setNubmerValue} />
      <div className={Styles.checkboxCnt}>
        <Checkbox
          isChecked={checkboxValue}
          htmlFor="personal-data-agreement"
          onChange={handlePDA}
        />
        <p className={Styles.pdaHint}>
          Согласие на обработку
          <br />
          персональных данных
        </p>
      </div>
      <Button label="Подтвердить номер" disabled={!isValidNumber} />
    </div>
  );
});

export default PanelEnterTel;
