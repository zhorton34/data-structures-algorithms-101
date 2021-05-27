let path = require('path')
let mix = require('laravel-mix')

mix.js('src/api.js', 'dist').webpackConfig({
	  resolve: {
	  	alias: {
	  		'@API': path.resolve(__dirname, 'src/api.js'),
				'@Sort': path.resolve(__dirname, 'src/sorts'),
				'@Helper': path.resolve(__dirname, 'src/helpers'),
				'@Search': path.resolve(__dirname, 'src/searches'),
				'@Factory': path.resolve(__dirname, 'src/factories'),
				'@DataStructure': path.resolve(__dirname, 'src/structures'),
	  	}
    }	
}).setPublicPath('dist')
