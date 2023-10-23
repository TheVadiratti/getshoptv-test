import type { ReactNode } from 'react';
import { AppointmentLayout } from '@/routes/appointment';

function Layout({ children }: { children: ReactNode }) {
  return <AppointmentLayout>{children}</AppointmentLayout>;
}

export default Layout;
