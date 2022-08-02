const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	// eslint
	lintOnSave: false,
	// 默认打开页面
	devServer: {
		host: 'localhost',
		open: true,
		// 代理
		proxy: {
			'/api': {
				target: 'http://gmall-h5-api.atguigu.cn',
			},
		},
	},
});
