// Карта навигации на страницы ввода номера телефона.
// По сути это связный список (граф) - объект, где каждый ключ (является id кнопки)
// содержит объект с кнопками по соседству (id кнопок).

import APPOINMENT_PAGE_BUTTONS from './keys';

const {
  Num1,
  Num2,
  Num3,
  Num4,
  Num5,
  Num6,
  Num7,
  Num8,
  Num9,
  Backspace,
  Num0,
  PdaCheckbox,
  Confirm,
  Close,
} = APPOINMENT_PAGE_BUTTONS;

const PAGE_MAP_APPOINTMENT = {
  [Num1]: {
    top: Confirm,
    right: Num2,
    bottom: Num4,
    left: Close,
  },
  [Num2]: {
    top: Confirm,
    right: Num3,
    bottom: Num5,
    left: Num1,
  },
  [Num3]: {
    top: Confirm,
    right: Close,
    bottom: Num6,
    left: Num2,
  },
  [Num4]: {
    top: Num1,
    right: Num5,
    bottom: Num7,
    left: Close,
  },
  [Num5]: {
    top: Num2,
    right: Num6,
    bottom: Num8,
    left: Num4,
  },
  [Num6]: {
    top: Num3,
    right: Close,
    bottom: Num9,
    left: Num5,
  },
  [Num7]: {
    top: Num4,
    right: Num8,
    bottom: Backspace,
    left: Close,
  },
  [Num8]: {
    top: Num5,
    right: Num9,
    bottom: Backspace,
    left: Num7,
  },
  [Num9]: {
    top: Num6,
    right: Close,
    bottom: Num0,
    left: Num8,
  },
  [Backspace]: {
    top: Num7,
    right: Num0,
    bottom: PdaCheckbox,
    left: Close,
  },
  [Num0]: {
    top: Num9,
    right: Close,
    bottom: PdaCheckbox,
    left: Backspace,
  },
  [PdaCheckbox]: {
    top: Backspace,
    right: Close,
    bottom: Confirm,
    left: Close,
  },
  [Confirm]: {
    top: PdaCheckbox,
    right: Close,
    bottom: Num1,
    left: Close,
  },
  [Close]: {
    top: Num1,
    right: Num1,
    bottom: Num1,
    left: Num1,
  },
};

export type MapAppointmentPage = typeof PAGE_MAP_APPOINTMENT;

export default PAGE_MAP_APPOINTMENT;
