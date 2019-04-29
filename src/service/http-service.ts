/**
 * http-service
 * @author guobin201314@gmail.com on 2019-04-20
 */
import axios, { AxiosInstance } from 'axios';
import { CONFIG } from '@/service/config';

export const httpService: AxiosInstance = axios.create({
  baseURL: CONFIG.host,
  timeout: 15000,
});

httpService.interceptors.request.use((config: any) => {
  return config;
}, (error: any) => {
  Promise.reject(error)
});

httpService.interceptors.response.use(
    (response: any) => {
      return response.data;
    },
    (error: any) => {
      return Promise.reject(error)
    }
);

