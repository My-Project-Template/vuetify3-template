const { defineConfig } = require('@vue/cli-service');
const path = require('path');

// add global scss
function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                // 全局mixin, function
                path.resolve(__dirname, 'src/assets/styles/scss/_globals.scss'),
                // 全局字体
                path.resolve(__dirname, 'src/assets/styles/scss/_fonts.scss'),
                // 全局公共文件
                path.resolve(__dirname, 'src/assets/styles/scss/_publics.scss'),
            ],
        });
}

module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: 'error',
    chainWebpack(config) {
        ['vue-modules', 'vue', 'normal-modules', 'normal'].forEach(type => {
            addStyleResource(config.module.rule('scss').oneOf(type));
        });

        config.resolve.alias
            .set('balm-ui-plus', 'balm-ui/dist/balm-ui-plus.js')
            .set('balm-ui-css', 'balm-ui/dist/balm-ui.css')
            .end()
            .end();
    },
    devServer: {
        port: 3222,
    },
});
