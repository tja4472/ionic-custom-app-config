console.log("** custom ionic.webpack.js **");

var ionicConfig = require("@ionic/app-scripts/config/webpack.config.js");
var BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

// dev config
ionicConfig.dev.plugins.push(new BundleAnalyzerPlugin());

//prod config
ionicConfig.prod.plugins.push(new BundleAnalyzerPlugin());

var ModuleConcatPlugin = require("webpack/lib/optimize/ModuleConcatenationPlugin");
// Remove ModuleConcatPlugin
ionicConfig.prod.plugins = ionicConfig.prod.plugins.filter(plugin => {
  return !(plugin instanceof ModuleConcatPlugin);
});

module.exports = {
  dev: ionicConfig.dev,
  prod: ionicConfig.prod
};
