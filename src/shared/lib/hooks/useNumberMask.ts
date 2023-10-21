import { useMemo, useCallback } from 'react';

export default function useNumberMask(value: string) {
  // Функция возвращает символ по индексу в строке либо _
  const symb = useCallback((i: number) => value[i] || '_', [value]);
  // Хук возвращает номер с маской
  return useMemo(
    // eslint-disable-next-line prettier/prettier
    () => `+7(${symb(0) + symb(1) + symb(2)})${symb(3) + symb(4) + symb(5)}-${symb(6) + symb(7)}-${symb(8) + symb(9)}`,
    [symb],
  );
}
