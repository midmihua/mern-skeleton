import restapi from 'utils/restapi';

export const getCookie = (cname) => {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

export const setCookies = (accessToken) => {
  document.cookie = `accessToken=${accessToken}; path=/`;
  restapi.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

export const removeCookie = () => {
  document.cookie = 'accessToken=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
};
