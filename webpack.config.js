const path = require('path'); // path module help us to access path routes
const HtmlWebpackPlugin = require('html-webpack-plugin'); //plugin to generate html files into output folder 
const SRC_DIR = path.resolve(__dirname, 'src/web'); // Source directory
const DIST_DIR = path.resolve(__dirname, 'dist'); // Distribution directory
const webpack = require('webpack');

const ENV = process.env.NODE_ENV.trim();

module.exports = {
  mode: ENV,
  entry: {
    client: SRC_DIR + '/index.js' // My entry file
  },
  // My output file
  output: { 
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: ENV == 'development' ? 'dist/' : './dist/',
    chunkFilename: '[name].bundle.js'
  },
  resolve: {
    extensions: [ '.js', '.json', '.jsx', 'css', 'png']
  },
  module : {
    rules : [
      // Loader for JSX files  
      {           
        test : /\.jsx?/,
        exclude: /node_modules|libs/,                    
        include : SRC_DIR,
        loader : 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jp(e*)g)$/,  
        use: ['url-loader']
      }
    ]
  },
  // Source mapping allow us to debug code from src files
  devtool: 'source-map',
  // Dev Server configuration
  devServer: { 
    contentBase: './src/web/',
    hot: true // with hot reload
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'index',
      template: './src/web/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};