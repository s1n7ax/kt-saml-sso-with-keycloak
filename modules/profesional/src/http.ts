import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import kc from './keycloak';

export default class HttpClient {
  constructor(baseUrl: string) {
    const axiosInstance = axios.create({
      validateStatus(status: number) {
        return status === 200 || status === 201;
      },
    });

    axiosInstance.interceptors.request.use(async (config: any) => {
      await kc.INSTANCE.updateToken(30);

      config.headers.Authorization = `Bearer ${kc.INSTANCE.token}`;

      return config;
    });

    return new Proxy(this, {
      get(_, prop) {
        return (url: string, ...args: any) => {
          url = baseUrl + url;
          return Reflect.get(axiosInstance, prop)(url, ...args);
        };
      },
    });
  }

  /* Following dummy methods are necessory to trick types in typescript */
  get<T = any, R = AxiosResponse<T>>(
    _url: string,
    _config?: AxiosRequestConfig
  ): Promise<R | null> {
    return Promise.resolve(null);
  }
  delete<T = any, R = AxiosResponse<T>>(
    _url: string,
    _config?: AxiosRequestConfig
  ): Promise<R | null> {
    return Promise.resolve(null);
  }
  head<T = any, R = AxiosResponse<T>>(
    _url: string,
    _config?: AxiosRequestConfig
  ): Promise<R | null> {
    return Promise.resolve(null);
  }
  options<T = any, R = AxiosResponse<T>>(
    _url: string,
    _config?: AxiosRequestConfig
  ): Promise<R | null> {
    return Promise.resolve(null);
  }
  post<T = any, R = AxiosResponse<T>>(
    _url: string,
    _data?: any,
    _config?: AxiosRequestConfig
  ): Promise<R | null> {
    return Promise.resolve(null);
  }
  patch<T = any, R = AxiosResponse<T>>(
    _url: string,
    _data?: any,
    _config?: AxiosRequestConfig
  ): Promise<R | null> {
    return Promise.resolve(null);
  }
  put<T = any, R = AxiosResponse<T>>(
    _url: string,
    _data?: any,
    _config?: AxiosRequestConfig
  ): Promise<R | null> {
    return Promise.resolve(null);
  }
}
