import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

abstract class Service {
  protected service: AxiosInstance;
  protected nextContext: any;

  constructor(baseURL: string = "", nextContext: any = "") {
    const config: AxiosRequestConfig = { timeout: 6000 };

    if (baseURL) {
      config.baseURL = baseURL;
    }

    this.service = axios.create({
      ...config,
    });

    this.nextContext = nextContext;

    this.service.interceptors.response.use(
      this.handleSuccess,
      this.handleError
    );
  }

  handleSuccess(response: AxiosResponse): AxiosResponse {
    return response;
  }

  handleError(error: AxiosResponse): Promise<never> {
    return Promise.reject(error);
  }

  abstract getHeaders(): any;

  abstract get(path: string, options?: any): Promise<AxiosResponse>;

  abstract patch(path: string, payload: any): Promise<AxiosResponse>;

  abstract put(path: string, payload: any): Promise<AxiosResponse>;

  abstract post(path: string, payload: any): Promise<AxiosResponse>;

  abstract request(
    path?: string,
    payload?: any,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse>;
}

export default Service;
