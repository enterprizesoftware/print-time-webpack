const chalk = require('chalk');

function PrintTimeWebpackPlugin() {}

PrintTimeWebpackPlugin.prototype.apply = function(compiler) {
  compiler.plugin('watch-run', function(compiler, callback) {
    let separator = '';
    for (let i = 0; i < 80; i++) separator += '_';
    console.log('\n' + separator);

    callback();
  });
  compiler.plugin('done', function() {
    setTimeout(function() {
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
