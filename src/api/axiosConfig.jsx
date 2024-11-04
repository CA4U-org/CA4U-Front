// src/api/axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL:
    'http://ec2-15-165-135-235.ap-northeast-2.compute.amazonaws.com:8080/api',
});

// 요청 인터셉터 추가
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
