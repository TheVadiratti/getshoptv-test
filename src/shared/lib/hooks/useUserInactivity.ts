import { useRef, useCallback, useEffect } from 'react';

interface Params {
  target: Document | Element; // элемент на который вешаются слушатели
  inactiveCallback: VoidFunction; // колбэк срабатывающий при неактивности
  delay: number; // время ожидания при бездействии
}

const useUserInactivity = ({ target, inactiveCallback, delay }: Params) => {
  // создаем реф для хранения таймера
  const timer = useRef<NodeJS.Timeout | null>(null);

  // функция обновляет таймер (откладывает исполнение колбэка)
  const defer = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(inactiveCallback, delay);
  }, [delay, inactiveCallback]);

  const setDeleteListener = useCallback(
    (event: string) => {
      target.addEventListener(event, defer);

      return () => {
        target.removeEventListener(event, defer);
      };
    },
    [defer, target],
  );

  useEffect(() => {
    setDeleteListener('mousemove');
  }, [setDeleteListener]);

  useEffect(() => {
    setDeleteListener('click');
  }, [setDeleteListener]);

  useEffect(() => {
    setDeleteListener('keydown');
  }, [setDeleteListener]);
};

export default useUserInactivity;
