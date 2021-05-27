let path = require('path')
let mix = require('laravel-mix')

mix.webpackConfig({
	  resolve: {
	  	alias: {
	  		'@API': path.join(__dirname, 'src'),
				'@Sort': path.join(__dirname, 'src/sorts'),
				'@Helper': path.join(__dirname, 'src/helpers'),
				'@Search': path.join(__dirname, 'src/searches'),
				'@Factory': path.join(__dirname, 'src/factories'),
				'@DataStructure': path.join(__dirname, 'src/structures'),
	  	}
    }	
})
.js('src/index.js', 'dist')
.setPublicPath('dist')
