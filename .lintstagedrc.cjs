const buildEslintCommand = (filenames) =>
  `yarn fix`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  // 他に実行したいコマンドをここに書く
};