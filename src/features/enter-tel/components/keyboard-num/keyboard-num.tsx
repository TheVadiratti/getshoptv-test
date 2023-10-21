/* eslint-disable react/jsx-no-bind */
import { memo, useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import Button from '@/shared/components/button/button';
import Styles from './keyboard-num.module.css';

interface Props {
  setNumberValue: Dispatch<SetStateAction<string>>;
}

const KeyboardNum = memo(({ setNumberValue }: Props) => {
  const handleClickButton = useCallback(
    (number: number | '-') => {
      if (number === '-') {
        // если нажали 'стереть' (код '-') - удаляем последний символ
        setNumberValue((prev) => prev.substring(0, prev.length - 1));
      } else {
        setNumberValue((prev) => {
          // если цифр набрано меньше допустимого, то можно набирать еще
          if (prev.length < 10) return prev + String(number);
          // иначе просто возвращаем предыдущее состояние
          return prev;
        });
      }
    },
    [setNumberValue],
  );

  return (
    <div className={Styles.keyboard}>
      <Button label="1" onClick={handleClickButton.bind(null, 1)} autoFocus />
      <Button label="2" onClick={handleClickButton.bind(null, 2)} />
      <Button label="3" onClick={handleClickButton.bind(null, 3)} />
      <Button label="4" onClick={handleClickButton.bind(null, 4)} />
      <Button label="5" onClick={handleClickButton.bind(null, 5)} />
      <Button label="6" onClick={handleClickButton.bind(null, 6)} />
      <Button label="7" onClick={handleClickButton.bind(null, 7)} />
      <Button label="8" onClick={handleClickButton.bind(null, 8)} />
      <Button label="9" onClick={handleClickButton.bind(null, 9)} />
      <Button
        extraClass={Styles.buttonDelete}
        label="cтереть"
        onClick={handleClickButton.bind(null, '-')}
      />
      <Button label="0" onClick={handleClickButton.bind(null, 0)} />
    </div>
  );
});

export default KeyboardNum;
