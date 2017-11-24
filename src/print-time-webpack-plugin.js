import chalk from 'chalk';

function PrintTimeWebpackPlugin() {}

PrintTimeWebpackPlugin.prototype.apply = function(compiler) {
  watchRun(compiler);
  timestampDone(compiler);
};

function watchRun(compiler) {
  compiler.plugin('watch-run', (watching, callback) => {
    console.log(`\n${'_'.repeat(100)}`);
    callback();
  });
}

function timestampDone(compiler) {
  compiler.plugin('done', () =>
    setTimeout(() => console.log(chalk.cyan(message())), 100)
  );
}

function message() {
  return `\nCompleted: ${timestamp()}`;
}

function timestamp() {
  const date = new Date();
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}

export default PrintTimeWebpackPlugin;
