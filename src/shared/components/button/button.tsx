/* eslint-disable react/button-has-type */
import { memo, useMemo } from 'react';
import Styles from './button.module.css';

interface Props {
  type?: 'button' | 'submit' | 'reset';
  label: string;
  onClick?: VoidFunction;
  extraClass?: string;
}

const Button = memo(
  ({ type = 'button', label, onClick, extraClass }: Props) => {
    const classNames = useMemo(() => {
      const classes = [Styles.button];

      if (extraClass) {
        classes.push(extraClass);
      }

      return classes;
    }, [extraClass]);

    return (
      <button className={classNames.join(' ')} type={type} onClick={onClick}>
        {label}
      </button>
    );
  },
);

export default Button;
