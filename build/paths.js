var appRoot = 'src/';
var outputRoot = 'dist/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  taggy: 'jspm_packages/github/collokia/taggy@1.0.1/*.js',
  style: 'styles/**/*.css',
  output: outputRoot,
  doc:'./doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};