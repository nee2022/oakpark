const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
	publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
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
						rootValue: 37.5, //1rem为75px
						minPixelValue: 2, //设计稿为2倍图
						propList: ['*']
					})
				]
			}
		}
	},
	/* 生产环境构建文件的目录 defalut: dist */
	outputDir: "dist",
	/* 放置生成的静态文件目录（js css img） */
	
	assetsDir: "static",
	
	/* 指定生成的index.html 输出路径 相对 default: index.html */
	
	indexPath: "index.html",
	
	/* 指定生成文件名中包含hash default: true */
	
	filenameHashing: true,
	
	/* 多页模式下 */
	
	pages: {
	
		index: {
	
			// page 的入口
	
			entry: "src/main.js",
	
			// 模板来源
	
			template: "public/index.html",
	
			// 在 dist/index.html 的输出
	
			filename: "index.html",
	
			// 当使用 title 选项时，
	
			// template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
	
			// title: "Index Page",
	
			// 在这个页面中包含的块，默认情况下会包含
	
			// 提取出来的通用 chunk 和 vendor chunk。
	
			chunks: ["chunk-vendors", "chunk-common", "index"]
	
		},
	
		// 当使用只有入口的字符串格式时，
	
		// 模板会被推导为 `public/subpage.html`
	
		// 并且如果找不到的话，就回退到 `public/index.html`。
	
		// 输出文件名会被推导为 `subpage.html`。
	
		// subpage: "src/subpage/main.js"
	
	},
	
	/* 是否保存时 lint 代码 */
	
	lintOnSave: false,
	
	/* 是否使用编译器 default: false */
	
	runtimeCompiler: false,
	
	/* 默认babel-loader会忽略node_modules中的文件，你想显示的话在这个选项中列出来 */
	
	// transpileDependencies: [],
	
	/* 生产环境的source map */
	
	productionSourceMap: true,
	
	// crossorigin: "",
	
	integrity: false,
	
	configureWebpack: {
		resolve: {
			alias: {
				'css': '@/css',
				'images': '@/images',
				'views': '@/views',
			}
		},
		//关闭 webpack 的性能提示
		performance: {
			hints: false
		},
	},
	
	
	devServer: {
		disableHostCheck: true,
		port: 8080,
	
		host: "0.0.0.0",
	
		https: false,
	
		// 自动启动浏览器
	
		open: false,
	
		proxy: {
			"/api": {
				//代理路径 例如 https://baidu.com
				target: "http://test-api.hejiaic.com/",
				// 将主机标头的原点更改为目标URL
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					"^/api": "/"
				}
			}
		}
	
	}
}
