module.exports = {
  semi: true,
  singleQuote: true,
  arrowParens: 'always',
  trailingComma: 'all',
  endOfLine: 'auto',
  importOrder: ['^react(.*)$', '^@expo(.*)$', '^expo(.*)$', '/config(.*)$', '^[./]'],
  importOrderSeparation: true,
  experimentalBabelParserPluginsList: ['classProperties', 'jsx', 'typescript'],
};
