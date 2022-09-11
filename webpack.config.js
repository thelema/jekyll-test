const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

process.env.NODE_ENV = Encore.isProduction() ? 'production' : 'dev';

Encore
  .setOutputPath('assets/')
  .setPublicPath('/assets')
//  .addStyleEntry('css/app', './_assets/css/app.css')
//  .addEntry('js/app', './_assets/js/app.js')
  .addStyleEntry('css/beautifuljekyll-minimal', './_assets/css/beautifuljekyll-minimal.css')
  .addStyleEntry('css/beautifuljekyll', './_assets/css/beautifuljekyll.css')
  .addStyleEntry('css/bootstrap-social', './_assets/css/bootstrap-social.css')
  .addStyleEntry('css/pygment_highlights', './_assets/css/pygment_highlights.css')
  .addStyleEntry('css/staticman', './_assets/css/staticman.css')
  .addEntry('js/beautifuljekyll', './_assets/js/beautifuljekyll.js')
  .addEntry('js/staticman', './_assets/js/staticman.js')
  .enablePostCssLoader()
  .disableSingleRuntimeChunk()
  .enableSourceMaps(!Encore.isProduction());

module.exports = Encore.getWebpackConfig();
