/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { memo, useRef, useEffect, useMemo, useCallback } from 'react';
import type {
  ChangeEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
} from 'react';
import Styles from './checkbox.module.css';

interface Props {
  isChecked: boolean;
  htmlFor: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLLabelElement>;
  isFocus?: boolean;
  extraClass?: string;
}

const Checkbox = memo(
  ({ isChecked, htmlFor, onChange, onClick, isFocus, extraClass }: Props) => {
    const checkboxRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (checkboxRef.current && isFocus) {
        checkboxRef.current.focus();
      }
    }, [isFocus]);

    const classNames = useMemo(() => {
      const classes = [Styles.checkbox];

      if (extraClass) {
        classes.push(extraClass);
      }

      return classes;
    }, [extraClass]);

    // при установленном фокусе на чекбоксе нажатие Enter устанавливает его в значение checked
    const handleCheck: KeyboardEventHandler<HTMLInputElement> = useCallback(
      (e) => {
        if (checkboxRef.current && e.code === 'Enter') {
          // установка в checked
          checkboxRef.current.click();
          // убирает фокус, чтобы пользователь видел результат
          checkboxRef.current.blur();
        }
      },
      [],
    );

    return (
      <>
        <input
          className={Styles.inputCheckbox}
          type="checkbox"
          onChange={onChange}
          id={htmlFor}
          checked={isChecked}
          ref={checkboxRef}
          onKeyDown={handleCheck}
        />
        <label
          className={classNames.join(' ')}
          htmlFor={htmlFor}
          onClick={onClick}
        />
      </>
    );
  },
);

export default Checkbox;
