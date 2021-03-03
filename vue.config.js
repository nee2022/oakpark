const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
	outputDir: 'dist',
	publicPath: './',
	// devServer: {
	// 	// 设置主机地址
	// 	 host: "0.0.0.0",
	// 	// 设置默认端口
	// 	port:8080,
	// 	// 设置代理
	// 	proxy: {
	// 		'oakpark': {
	// 			// 目标 API 地址
	// 			target: 'http://www.api.sqjtjt.com',
	// 			// 如果要代理 websockets
	// 			ws: true,
	// 			// 将主机标头的原点更改为目标URL
	// 			changeOrigin: false
	// 		}
	// 	}
	// },
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					pxtorem({
						rootValue: 75, //1rem为75px
						minPixelValue: 2, //设计稿为2倍图
						propList: ['*']
					})
				]
			}
		}
	}
}
