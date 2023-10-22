/* eslint-disable prefer-promise-reject-errors */
async function validateTel(tel: string) {
  const res = await fetch(
    `http://apilayer.net/api/validate?access_key=8c433a52c26d8680716e6c3782aa271f&number=7${tel}`,
  );
  if (res.ok) {
    return res.json();
  }
  return Promise.reject('Ошибка запроса');
}

export default validateTel;
