import axios from 'axios';

import { getCookie } from './cookies';

export const API_BASE_URL = 'http://localhost:8000/api/';

const restapi = () => {
  let headers = {};
  const instance = axios.create({
    baseURL: `${API_BASE_URL}`,
    headers: headers,
  });

  if (typeof document !== 'undefined') {
    const accessToken = getCookie('accessToken');
    if (accessToken !== '') {
      instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    }
  }
  return instance;
};
export default restapi();
