var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
module.exports = function(env) {
  return {
    devtool: 'inline-source-map',
    entry: './js/webpack.js',
    output: {
      path: __dirname + '/dist',
      filename: 'content.js'
    },
    resolve: {
      extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ['css-loader', 'sass-loader', 'import-glob-loader']
          })
        }
      ],
      loaders: [
        { test: /\.html$/, loader: 'raw-loader', exclude: /node_modules/ },
        { test: /\.css$/, loader: 'style-loader!css-loader', exclude: /node_modules/ },
        { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader!import-glob-loader', exclude: /node_modules/ },
        { test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, loader: 'url-loader' },
        { test: /\.tsx?$/, loader: "ts-loader" }
      ]
    },
    plugins: [
      new ExtractTextPlugin("k2bm.css"),
    ],
  };
};
