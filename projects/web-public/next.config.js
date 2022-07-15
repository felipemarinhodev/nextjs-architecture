const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@felipemarinhodev/design-system',
  '@felipemarinhodev/utils'
]);

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPlugins([withTM], {
  trailingSlash: true
});
