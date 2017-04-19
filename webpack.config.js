module.exports = {
  entry: "./app/App.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/static/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: __dirname,
        query: {
          presets: ['react', 'es2015', 'stage-0', 'react-hmre']
        }
      }
    ]
  }
}