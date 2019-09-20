export const getUrl = () => {
  let _BASE_URL;
  if (process.env.NODE_ENV === 'production') {
    _BASE_URL = window.location.origin === 'https://app.niyonapp.com'
      ? 'https://niyon-prod.herokuapp.com/api'
      : 'https://niyon-staging.herokuapp.com/api';
  } else {
    _BASE_URL = 'https://niyon-staging.herokuapp.com/api';
  }

  return _BASE_URL;
};
