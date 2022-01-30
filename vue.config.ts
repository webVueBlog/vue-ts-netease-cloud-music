// eslint-disable-next-line @typescript-eslint/no-var-requires
const WorkboxPlugin = require('workbox-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  outputDir: '',
  configureWebpack: {
    devtool: isProd ? false : 'source-map',
    // devServer: {
    //   open: true,
    //   proxy: {
    //     '/api': {
    //       target: 'http://localhost:3000',
    //       pathRewrite: { '^/api': '' },
    //       changeOrigin: true,
    //       secure: false,
    //     },
    //   },
    //   port: 8888,
    // },
    // externals: isProd ? {
    //   vue: 'Vue',
    //   'vue-router': 'VueRouter',
    //   vuex: 'Vuex',
    //   axios: 'axios',
    // } : {},
    plugins: [
      new WorkboxPlugin.GenerateSW()
    ]
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "~@/style/variables.scss";
          @import "~@/style/mixin.scss";
        `,
      },
    },
  },
}
