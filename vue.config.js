const { defineConfig } = require('@vue/cli-service');
const path = require('path');

// plugins
const { VuetifyPlugin } = require('webpack-plugin-vuetify');

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

        config
            .plugin('vuetify-plugin')
            .use(VuetifyPlugin, [
                {
                    styles: {
                        configFile: 'src/assets/styles/scss/_settingv.scss',
                    },
                },
            ])
            .end();
    },
    devServer: {
        port: 3222,
    },
});
