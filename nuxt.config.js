export default {
  ssr: false,

  target: 'static',

  head: {
    title: 'ヨッチー',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' },
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
      name: 'ヨッチー',
      short_name: 'ヨッチー',
      description: 'ヨッチーはあなたの代わりにお題を考えるサービスです',
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
