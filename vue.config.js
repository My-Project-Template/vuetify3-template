const { defineConfig } = require('@vue/cli-service');
const path = require('path');

// plugins
const { VuetifyPlugin } = require('webpack-plugin-vuetify');

/** @description Add global style-resource for scss file */
function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                // global fonts, mixins and scss functions
                path.resolve(__dirname, 'src/assets/styles/scss/_vars.scss'),
            ],
        });
}

module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: 'error',
    css: {
        loaderOptions: {
            scss: { sourceMap: true },
        },
    },
    chainWebpack(config) {
        ['vue-modules', 'vue', 'normal-modules', 'normal'].forEach(type => {
            addStyleResource(config.module.rule('scss').oneOf(type));
        });

        // add resolve-url-loader
        ['vue-modules', 'vue', 'normal-modules', 'normal'].forEach(rule => {
            config.module
                .rule('scss')
                .oneOf(rule)
                .use('resolve-url-loader')
                .loader('resolve-url-loader')
                .before('sass-loader')
                .end();
        });

        config
            .plugin('vuetify-plugin')
            .use(VuetifyPlugin, [
                {
                    styles: {
                        configFile: 'src/assets/styles/scss/_conf-vuetify.scss',
                    },
                },
            ])
            .end();
    },
    devServer: {
        port: 3222,
    },
});
