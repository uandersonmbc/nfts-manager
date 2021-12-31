import { AxiosRequestConfig, AxiosResponse } from "axios";
import Service from "./Service";

class ServerService extends Service {
  constructor(nextContext: any) {
    super(process.env?.API_BASE_URL || "", nextContext);
  }

  getHeaders(): any {
    try {
      return {
        "X-Auth-Token": this.nextContext.req.cookies.BitfyAdvBackoffice,
      };
    } catch (error) {
      return {};
    }
  }

  get(path: string, options = {}): Promise<AxiosResponse> {
    return this.request(path, null, { ...options, method: "GET" });
  }

  patch(path: string, payload: any): Promise<AxiosResponse> {
    return this.request(path, payload, { method: "PATCH" });
  }

  put(path: string, payload: any): Promise<AxiosResponse> {
    return this.request(path, payload, { method: "PUT" });
  }

  post(path: string, payload: any): Promise<AxiosResponse> {
    return this.request(path, payload, { method: "POST" });
  }

  request(
    path: string,
    payload: any = undefined,
    options: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const config: AxiosRequestConfig = {
      responseType: "json",
      url: path,
      data: payload,
      headers: this.getHeaders(),
      ...options,
    };

    return this.service.request(config);
  }
}

export default ServerService;
