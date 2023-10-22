/* eslint-disable react/button-has-type */
import { memo, useRef, useEffect, useMemo } from 'react';
import Styles from './button-close.module.css';

interface Props {
  type?: 'button' | 'submit' | 'reset';
  onClick?: VoidFunction;
  isFocus?: boolean;
  extraClass?: string;
}

const ButtonClose = memo(
  ({ type = 'button', onClick, isFocus, extraClass }: Props) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
      if (buttonRef.current && isFocus) {
        buttonRef.current.focus();
      }
    }, [isFocus]);

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
        aria-label="Закрыть страницу"
        ref={buttonRef}
      >
        <svg
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_14_204)">
            <line
              x1="1.03448"
              y1="0.913793"
              x2="22.0345"
              y2="20.9138"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="0.972763"
              y1="20.9069"
              x2="22.2544"
              y2="0.906939"
              stroke="black"
              strokeWidth="3"
            />
          </g>
          <defs>
            <clipPath id="clip0_14_204">
              <rect width="23" height="22" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    );
  },
);

export default ButtonClose;
