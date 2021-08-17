import { Plugin } from '@nuxt/types';
import { AxiosResponse, AxiosError } from 'axios';
import { ThemeRepository } from '@/repositories/theme_repository';

declare module 'vue/types/vue' {
  interface Vue {
    readonly $themeRepository: ThemeRepository;
  }
}

const repositoryPlugin: Plugin = (context, inject) => {
  const instance = context.$axios.create({
    baseURL: 'https://asia-northeast1-yochy-cea25.cloudfunctions.net',
  });

  instance.interceptors.response.use(
    (res: AxiosResponse) => {
      return res;
    },
    (err: AxiosError) => {
      return err;
    }
  );

  const themeRepository = new ThemeRepository(instance);
  inject('themeRepository', themeRepository);
}

export default repositoryPlugin;
