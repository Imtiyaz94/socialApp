export const isAuth = () => {
  return window.localStorage.getItem('access_token');
};

export const getToken = () => {
  return isAuth() ? window.localStorage.getItem('access_token') : '';
};

export const setTokens = (token) => {
  window.localStorage.setItem('access_token', token);
};

 