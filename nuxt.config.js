const title = 'ヨッチー | 楽しい話題提供アプリ';
const description = '楽しく盛り上がれる話題をランダムに表示します。飲み会や合コン、暇つぶしにオススメです！';
const url = 'https://yochy-cea25.web.app';

export default {
  ssr: false,

  target: 'static',

  head: {
    title,
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: title },
      { hid: 'keywords', name: 'keywords', content: '話題,お題,初対面,メーカー,ランダム' },
      { hid: 'author', name: 'author', content: 'fukky21' },
      { hid: 'og:site_name', property: 'og:site_name', content: title },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: url },
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'og:image', property: 'og:image', content: `${url}/ogp.png` },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@fukky21' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '~assets/main.scss'
  ],

  plugins: [
    '~/plugins/repository'
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/pwa',
    '@nuxtjs/vuetify'
  ],

  modules: [
    '@nuxtjs/axios'
  ],

  axios: {},

  pwa: {
    manifest: {
      name: title,
      short_name: 'ヨッチー',
      description,
      background_color: '#64C9CF',
      theme_color: '#64C9CF',
      lang: 'ja'
    }
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      options: { customProperties: true },
      themes: {
        light: {
          primary: '#DF711B',
          background: '#64C9CF'
        },
      }
    }
  },

  build: {
    babel: {
      plugins: [["@babel/plugin-proposal-private-property-in-object", { "loose": true }]]
    }
  },

  generate: { 
    dir: 'public' 
  }
}
