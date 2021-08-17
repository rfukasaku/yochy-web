import { NuxtAxiosInstance } from "@nuxtjs/axios";
import { AxiosResponse } from 'axios';

export class ThemeRepository {
  private readonly axios: NuxtAxiosInstance;
  private path = '/app/api/v1/themes';

  constructor(axios: NuxtAxiosInstance) {
    this.axios = axios;
  }

  public async getThemes(): Promise<AxiosResponse> {
    const res = await this.axios.get(this.path);
    return res;
  }
}
