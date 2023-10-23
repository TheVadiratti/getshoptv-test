'use client';

import { createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';

const FocusContext = createContext<{
  currFocus: number,
  setCurrFocus: Dispatch<SetStateAction<number>>,
} | null>(null);

export default FocusContext;
