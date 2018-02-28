const poi = require('poi')

poi({
  mode: 'production',
  entry: './demo/index.js',
  dist: 'demo-dist',
  jsx: 'react',
  removeDist: true,
  sourceMap: false
}).build()
