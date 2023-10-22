/* eslint-disable react/jsx-no-bind */
import { memo, useCallback, useEffect } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import Button from '@/shared/components/button/button';
import { deleteLastSymb } from '@/shared/lib/helpers/string';
import { isNumberKey } from '@/shared/lib/helpers/keyboard';
import { MAX_LENGTH_INPUT_NUMBER } from '../../consts/number';
import Styles from './keyboard-num.module.css';

interface Props {
  setNumberValue: Dispatch<SetStateAction<string>>;
  currFocus?: number;
}

const KeyboardNum = memo(({ setNumberValue, currFocus }: Props) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const { code } = e;
      // если нажатая клавиша относится к числовым
      if (isNumberKey(e)) {
        setNumberValue((prev) => {
          // проверка что цифр набрано меньше чем можно
          if (prev.length < MAX_LENGTH_INPUT_NUMBER)
            // вставляем в номер последний символ кода клавиши (всегда её цифра)
            return prev + code[code.length - 1];
          // иначе просто возвращаем предыдущее состояние
          return prev;
        });
      }
      // если нажали 'Backspace' - удаляем последний символ
      if (code === 'Backspace') {
        setNumberValue((prev) => deleteLastSymb(prev));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setNumberValue]);

  const handleClickButton = useCallback(
    (number: number | '-') => {
      if (number === '-') {
        // если нажали 'стереть' (код '-') - удаляем последний символ
        setNumberValue((prev) => deleteLastSymb(prev));
      } else {
        setNumberValue((prev) => {
          // проверка что цифр набрано меньше чем можно
          if (prev.length < MAX_LENGTH_INPUT_NUMBER)
            return prev + String(number);
          // иначе просто возвращаем предыдущее состояние
          return prev;
        });
      }
    },
    [setNumberValue],
  );

  return (
    <div className={Styles.keyboard}>
      <Button
        label="1"
        onClick={handleClickButton.bind(null, 1)}
        isFocus={currFocus === 1}
      />
      <Button
        label="2"
        onClick={handleClickButton.bind(null, 2)}
        isFocus={currFocus === 2}
      />
      <Button
        label="3"
        onClick={handleClickButton.bind(null, 3)}
        isFocus={currFocus === 3}
      />
      <Button
        label="4"
        onClick={handleClickButton.bind(null, 4)}
        isFocus={currFocus === 4}
      />
      <Button
        label="5"
        onClick={handleClickButton.bind(null, 5)}
        isFocus={currFocus === 5}
      />
      <Button
        label="6"
        onClick={handleClickButton.bind(null, 6)}
        isFocus={currFocus === 6}
      />
      <Button
        label="7"
        onClick={handleClickButton.bind(null, 7)}
        isFocus={currFocus === 7}
      />
      <Button
        label="8"
        onClick={handleClickButton.bind(null, 8)}
        isFocus={currFocus === 8}
      />
      <Button
        label="9"
        onClick={handleClickButton.bind(null, 9)}
        isFocus={currFocus === 9}
      />
      <Button
        extraClass={Styles.buttonDelete}
        label="cтереть"
        onClick={handleClickButton.bind(null, '-')}
        isFocus={currFocus === 10}
      />
      <Button
        label="0"
        onClick={handleClickButton.bind(null, 0)}
        isFocus={currFocus === 11}
      />
    </div>
  );
});

export default KeyboardNum;
