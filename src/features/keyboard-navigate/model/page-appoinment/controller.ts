import type { Dispatch, SetStateAction } from 'react';
import PAGE_MAP_APPOINTMENT from "./map";
import type { MapAppointmentPage } from './map';

const appoinmentPageFocusController = (value: number, setter: Dispatch<SetStateAction<number>>, key: string) => {
  if (key === 'ArrowUp') {
    setter(PAGE_MAP_APPOINTMENT[value as keyof MapAppointmentPage].top);
  }
  if (key === 'ArrowRight') {
    setter(PAGE_MAP_APPOINTMENT[value as keyof MapAppointmentPage].right);
  }
  if (key === 'ArrowDown') {
    setter(PAGE_MAP_APPOINTMENT[value as keyof MapAppointmentPage].bottom);
  }
  if (key === 'ArrowLeft') {
    setter(PAGE_MAP_APPOINTMENT[value as keyof MapAppointmentPage].left);
  }
}

export default appoinmentPageFocusController;