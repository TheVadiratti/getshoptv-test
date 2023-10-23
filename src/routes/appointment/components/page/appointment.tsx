'use client';

import { memo, useEffect, useContext } from 'react';
import PanelEnterTel from '@/widgets/panel-enter-tel';
import appoinmentPageFocusController from '../../model/navigate/controller';
import FocusContext from '../../model/context/focus';

const AppointmentPage = memo(() => {
  const focusState = useContext(FocusContext);

  useEffect(() => {
    const handleNavKey = (e: KeyboardEvent) => {
      if (focusState) {
        const { currFocus, setCurrFocus } = focusState;
        appoinmentPageFocusController(currFocus, setCurrFocus, e.key);
      }
    };

    document.addEventListener('keydown', handleNavKey);

    return () => {
      document.removeEventListener('keydown', handleNavKey);
    };
  }, [focusState]);

  return <PanelEnterTel />;
});

export default AppointmentPage;
