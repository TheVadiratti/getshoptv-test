/* eslint-disable prefer-promise-reject-errors */

type ValidateResult = { isSuccess: boolean, isValid: boolean, message: string };

const validateTel: (tel: string) => Promise<ValidateResult> = (tel) =>
  fetch(
    `http://apilayer.net/api/validate?access_key=8c433a52c26d8680716e6c3782aa271f&number=7${tel}`,
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Ошибка запроса');
    })
    .then((res) => {
      if (res.valid) {
        return { isSuccess: true, isValid: true, message: 'Номер валиден' };
      }
      return {
        isSuccess: true,
        isValid: false,
        message: 'Неверно введён номер',
      };
    })
    .catch((err) => ({ isSuccess: false, isValid: false, message: err }));

export default validateTel;
