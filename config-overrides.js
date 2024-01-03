/* eslint-disable */

const { useBabelRc, override, addWebpackModuleRule, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = override(
  useBabelRc(),
  addWebpackModuleRule({
    test: /\.(js|tsx)$/,
    use: [
      { loader: 'babel-loader' },
      {
        loader: '@linaria/webpack-loader',
        options: {
          cacheDirectory: 'src/.linaria_cache',
          sourceMap: process.env.NODE_ENV !== 'production',
        },
      },
    ],
  }),
  addWebpackAlias({
    '@api': path.resolve(__dirname, 'src/api/'),
    '@assets': path.resolve(__dirname, 'src/assets/'),
    '@components': path.resolve(__dirname, 'src/components/'),
    '@helpers': path.resolve(__dirname, 'src/helpers/'),
    '@pages': path.resolve(__dirname, 'src/pages/'),
    '@redux': path.resolve(__dirname, 'src/redux/'),
  }),
)
