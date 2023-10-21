/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { memo, ChangeEventHandler, MouseEventHandler } from 'react';
import Styles from './checkbox.module.css';

interface Props {
  isChecked: boolean;
  htmlFor: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLLabelElement>;
}

const Checkbox = memo(({ isChecked, htmlFor, onChange, onClick }: Props) => (
  <label
    className={`${Styles.checkbox} ${isChecked && Styles.checkboxChecked}`}
    htmlFor={htmlFor}
    onClick={onClick}
  >
    <input
      className={Styles.inputCheckbox}
      type="checkbox"
      onChange={onChange}
      id={htmlFor}
      checked={isChecked}
    />
  </label>
));

export default Checkbox;
