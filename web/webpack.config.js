module.exports = {
  context: __dirname + "/script",
  entry: "./bootstrap.ts",
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      {test: /\.tsx?$/, loader: 'ts-loader'},
      {test: /\.css$/, loader: 'css-loader'}
    ],
    noParse: [/.+\/angular2\/bundles\/.+/]
  },
  output: {
    path: "../api/src/web",
    filename: "bundle.js"
  },
  devServer: {
    historyApiFallback: true
  }
};
