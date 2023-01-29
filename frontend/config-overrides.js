/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')
const webpack = require('webpack')
const { override, addWebpackAlias, addWebpackResolve, addWebpackPlugin } = require('customize-cra')
const dotenv = require('dotenv')

dotenv.config()

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
  }),
  addWebpackResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
  addWebpackPlugin(
    new webpack.EnvironmentPlugin({
      REACT_APP_DEVELOPMENT: process.env.NODE_ENV === 'development',
      REACT_APP_INFURA_API_KEY: process.env.INFURA_API_KEY,
      REACT_APP_API_BASE_URL: process.env.API_BASE_URL,
      REACT_APP_CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
      REACT_APP_CHAIN: process.env.CHAIN,
    }),
  ),
)
