'use client';

import {
  memo,
  useCallback,
  useMemo,
  useState,
  useContext,
  useEffect,
} from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/shared/components/button/button';
import KeyboardNum, { MAX_LENGTH_INPUT_NUMBER } from '@/features/enter-tel';
import useNumberMask from '@/shared/lib/hooks/useNumberMask';
import Checkbox from '@/shared/components/checkbox/checkbox';
import { FocusContext } from '@/routes/appointment';
import validateTel from '@/features/validate-tel';
import Styles from './panel-enter-tel.module.css';

const PanelEnterTel = memo(() => {
  const [numberValue, setNubmerValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const number = useNumberMask(numberValue);
  const focusContext = useContext(FocusContext);
  const router = useRouter();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (errorMessage) {
      // удаляем текст ошибки через 5 сек показа
      const timer = setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [errorMessage]);

  const handlePDA = useCallback(() => {
    setCheckboxValue(!checkboxValue);
  }, [checkboxValue]);

  const isConfirmBtnAvailable = useMemo(
    () =>
      // есть согласие на обработку ПД
      checkboxValue &&
      // корректная длина номера
      numberValue.length === MAX_LENGTH_INPUT_NUMBER &&
      // отсутствует ошибка валидации
      !errorMessage,
    [checkboxValue, numberValue, errorMessage],
  );

  const handleConfirmTel = useCallback(async () => {
    const { isSuccess, isValid, message } = await validateTel(numberValue);

    if (isSuccess) {
      if (isValid) {
        // используется именно replace, т.к. в данном случае нам не нужно добавлять URL в историю
        router.replace('/appointment/success');
      } else {
        // устанавливаем текст ошибки валидации
        setErrorMessage(message);
      }
    } else {
      // устанавливаем текст ошибки запроса
      setErrorMessage(message);
    }
  }, [router, numberValue]);

  return (
    <div className={Styles.panel}>
      {focusContext && (
        <>
          <h2 className={Styles.heading}>
            Введите ваш номер мобильного телефона
          </h2>
          <p
            className={`${Styles.number} ${errorMessage && Styles.numberError}`}
          >
            {number}
          </p>
          <p className={Styles.hint}>
            и с Вами свяжется наш менеждер для дальнейшей консультации
          </p>
          <KeyboardNum
            setNumberValue={setNubmerValue}
            currFocus={focusContext.currFocus}
          />

          <div className={Styles.checkboxCnt}>
            {errorMessage ? (
              <p className={Styles.error}>{errorMessage}</p>
            ) : (
              <>
                <Checkbox
                  isChecked={checkboxValue}
                  htmlFor="personal-data-agreement"
                  onChange={handlePDA}
                  isFocus={focusContext.currFocus === 12}
                />
                <p className={Styles.pdaHint}>
                  Согласие на обработку
                  <br />
                  персональных данных
                </p>
              </>
            )}
          </div>
          <Button
            label="Подтвердить номер"
            disabled={!isConfirmBtnAvailable}
            isFocus={focusContext.currFocus === 13 && isConfirmBtnAvailable}
            onClick={handleConfirmTel}
          />
        </>
      )}
    </div>
  );
});

export default PanelEnterTel;
