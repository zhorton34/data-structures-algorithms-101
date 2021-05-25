let mix = require('laravel-mix');
let path = require('path')
mix.js('src/index.js', 'dist').webpackConfig({
	  resolve: {
	  	alias: {
				'@Sort': path.resolve(__dirname, 'src/sorts'),
				'@Helper': path.resolve(__dirname, 'src/helpers'),
				'@Factory': path.resolve(__dirname, 'src/factories'),
				'@DataStructure': path.resolve(__dirname, 'src/structures'),
	  	}
    }	
}).setPublicPath('dist')
