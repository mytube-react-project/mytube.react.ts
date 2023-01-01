import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import TokenRepository from 'repository/tokenRepository';

interface ApiCoreType {
  baseURL: string;
  tokenActive: boolean;
  toastActive?: boolean | undefined;
  option?: any;
}

export class ApiCore {
  baseURL: string;
  tokenActive: boolean;
  toastActive?: boolean | undefined;
  option?: any;

  constructor({ baseURL, tokenActive, toastActive, option }: ApiCoreType) {
    this.baseURL = baseURL;
    this.tokenActive = tokenActive;
    this.toastActive = toastActive;
    this.option = option;
  }

  public http() {
    const Axios: AxiosInstance = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      ...this.option,
    });

    Axios.interceptors.request.use(
      (config: AxiosRequestConfig<any>) => {
        if (this.tokenActive) {
          const token = TokenRepository.getToken();
          if (!token) return config;
          config.headers!.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      },
    );

    return Axios;
  }
}
