/** @type {import('next').NextConfig} */

const path = require('path');
const withNextIntl = require('next-intl/plugin')();

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = withNextIntl(nextConfig);
