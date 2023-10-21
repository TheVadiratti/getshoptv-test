/* eslint-disable import/prefer-default-export */
const isNumberKey = (e: KeyboardEvent) => {
  const { code, key, keyCode } = e;
  return (
    (code.startsWith('Numpad') &&
      key !== 'Delete' &&
      keyCode !== 13 &&
      key !== '.' &&
      key !== '+' &&
      key !== '-' &&
      key !== '*' &&
      key !== '/') ||
    code.startsWith('Digit')
  );
};

export { isNumberKey };
