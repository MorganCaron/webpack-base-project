"use strict";

const webpackConfigGenerator = require("webpack-config-generator");

module.exports = (env, argv) => {
	return webpackConfigGenerator({
		mode: argv.mode,
		entry: {
			app: ["./src/ts/app.ts", "./src/sass/style.sass", "./src/css/style.css"]
		},
		index: "./src/index.html",
		favicon: "./src/favicon.png"
	});
};
