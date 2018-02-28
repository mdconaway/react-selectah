const poi = require('poi')

poi({
  mode: 'production',
  entry: './src/index.js',
  jsx: 'react',
  format: 'umd',
  library: 'react-selectah',
  moduleName: 'Selectah',
  removeDist: true,
  sourceMap: false,
  vendor: false,
  webpack: config => {
    config.externals = {
      react: 'react',
      'prop-types': 'prop-types'
    }
    return config
  }
}).build()
