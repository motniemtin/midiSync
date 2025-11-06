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
  reactStrictMode: true,
  allowedDevOrigins: [`https://pianosync.com:3000`, `https://localhost:3000`],
  
  compiler: {
    styledComponents: true
  },
  turbopack: {

  }, 
  images: { unoptimized: true }, // nếu bạn dùng <Image>
  output: 'export',
  distDir: 'dist',
  trailingSlash: true
};

module.exports = nextConfig;
