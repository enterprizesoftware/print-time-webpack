const chalk = require('chalk');

function PrintTimeWebpackPlugin(options) {
}

PrintTimeWebpackPlugin.prototype.apply = function (compiler) {
  (
    compiler.hooks ?
      compiler.hooks.watchRun.tapAsync.bind(compiler.hooks.watchRun, 'PrintTimeWebpackPlugin') :
      compiler.plugin.bind(compiler, 'watch-run')
  )(function (compilation, callback) {
    let separator = '';
    for (let i = 0; i < 80; i++) separator += '_';
    console.log('\n' + separator);

    callback();
  });
  (
    compiler.hooks ?
      compiler.hooks.done.tap.bind(compiler.hooks.done, 'PrintTimeWebpackPlugin') :
      compiler.plugin.bind(compiler, 'done')
  )(function () {
    setTimeout(function () {
      console.log(chalk.cyan(message()));
    }, 100);
  });
};

function message() {
  return '\nCompleted: ' + timestamp();
}

function timestamp() {
  const date = new Date();
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}

module.exports = PrintTimeWebpackPlugin;
