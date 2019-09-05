"use strict";

const WebpackConfigGenerator = require("webpack-config-generator");

module.exports = (env, argv) => {
  return WebpackConfigGenerator({
    mode: argv.mode,
    entry: {
      app: ["./src/ts/app.ts", "./src/sass/style.sass", "./src/css/style.css"]
    }
  });
};
