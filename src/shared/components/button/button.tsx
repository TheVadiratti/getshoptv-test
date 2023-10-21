/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/button-has-type */
import { memo, useMemo } from 'react';
import Styles from './button.module.css';

interface Props {
  type?: 'button' | 'submit' | 'reset';
  label: string;
  onClick?: VoidFunction;
  autoFocus?: boolean;
  disabled?: boolean;
  extraClass?: string;
}

const Button = memo(
  ({
    type = 'button',
    label,
    onClick,
    autoFocus = false,
    disabled,
    extraClass,
  }: Props) => {
    const classNames = useMemo(() => {
      const classes = [Styles.button];

      if (extraClass) {
        classes.push(extraClass);
      }

      return classes;
    }, [extraClass]);

    return (
      <button
        className={classNames.join(' ')}
        type={type}
        onClick={onClick}
        autoFocus={autoFocus}
        disabled={disabled}
      >
        {label}
      </button>
    );
  },
);

export default Button;
