const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'LipSync.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
        name: 'LipSync',
        type: "var"
    }
  },
  module: {
    rules: [
      {
        test: /\.worker\.js$/, // 以 .worker.js 结尾的文件将被 worker-loader 加载
        use: { 
          loader: 'worker-loader',
          // options: {
          //   inline: true,
          //   fallback: false
          // }
        }
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node-modules/"
      }
    ]
  },
  devServer: {
    static: {
        directory: path.join(__dirname, './dist'),
      },
    port: 9000,
    hot: true,
  },
};