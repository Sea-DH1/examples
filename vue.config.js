const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
	chainWebpack: config => {
		config.module
			.rule('raw')
			.test(/\.(glsl|fs|vs)$/)
			.use('raw-loader')
			.loader('raw-loader')
			.end();
		config.module
			.rule('glslify')
			.test(/\.(glsl|fs|vs)$/)
			.use('glslify-loader')
			.loader('glslify-loader');
		config.module
			.rule('hdr')
			.test(/\.hdr$/)
			.use('url-loader')
			.loader('url-loader')
			.end();
		if (process.env.NODE_ENV === 'production') {
			config.optimization.minimize(true);
			config.optimization.splitChunks({
				chunks: 'all'
			});
			config.plugin('compressionPlugin').use(
				new CompressionPlugin({
					test: /\.(js|css|less|scss)$/, // 匹配文件名
					threshold: 10240, // 对超过10k的数据压缩
					deleteOriginalAssets: false // 不删除源文件
				})
			);
		}
	},
	configureWebpack: {
		devtool: process.env.NODE_ENV === 'production' ? '' : 'source-map',
		resolve: {
			extensions: ['.glsl', '.fs', '.vs', '.js', '.vue', '.css', '.png', '.jpg', '.jpeg', '.hdr'],
			alias: {
				'@': path.resolve(__dirname, './src'),
				CONST: path.resolve(__dirname, './src/const'),
				JS: path.resolve(__dirname, './src/js'),
				LIB: path.resolve(__dirname, './src/libs'),
				WEBGL: path.resolve(__dirname, './src/webgl'),
				ASSETS: path.resolve(__dirname, './src/assets'),
				CONST: path.resolve(__dirname, './src/const'),
				COMPONENT: path.resolve(__dirname, './src/components'),
				MODULES: path.resolve(__dirname, './src/webgl/modules'),
				SECTIONS: path.resolve(__dirname, './src/webgl/sections')
			}
		}
	},
	publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	devServer: {
		host: '0.0.0.0',
		proxy: {
			'/examples': {
				target: 'https://sea-data-1258146953.cos.ap-shanghai.myqcloud.com',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/examples': '/examples/'
				}
			}
		}
	}
};
