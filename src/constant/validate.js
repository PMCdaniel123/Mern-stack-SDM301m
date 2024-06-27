export const REGEX = {};

export const MESS = {
  ERROR_BRAND_NAME: 'Please enter brand name.',
  ERROR_EXISTED_BRAND_NAME: 'Brand name is existed.',
  ERROR_MEMBERNAME: 'Please enter member name.',
  ERROR_PASSWORD: 'Please enter password.',
  ERROR_WATCH_NAME: 'Please enter member name.',
  ERROR_IMAGE_URL: 'Please enter image URL.',
  ERROR_PRICE: 'Please enter price.',
  ERROR_PRICE_POSITIVE: 'Price must be greater than or equal to 0',
  ERROR_PRICE_NUMBER: 'Price must be a number',
  ERROR_BRAND_NAME_OPTION: 'Please choose brand name.',
};

export const validatePassword = (password) => {
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{6,}$/;
  return (
    passwordRegex.test(password) ||
    'Password must be at least 6 characters long and include a number, a letter, and a special character'
  );
};
