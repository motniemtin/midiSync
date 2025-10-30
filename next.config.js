const { AlphaTabWebPackPlugin } = require('@coderline/alphatab/webpack');
const nextConfig = {
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
  typescript: {
    // ❗ Cho phép build dù có lỗi TypeScript
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.watchOptions = {
      ignored: ['**/node_modules/**', '**/.next/**', '**/dist/**'],
    };
    config.plugins.push(
      new AlphaTabWebPackPlugin({
        assetOutputDir: 'public/alphatab'
      })
    );
    return config;
  },
  images: { unoptimized: true }, // nếu bạn dùng <Image>
  output: 'export',
  distDir: 'dist',
  trailingSlash: true
};

module.exports = nextConfig;
