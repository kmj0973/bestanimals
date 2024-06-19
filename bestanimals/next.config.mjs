/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  productionBrowserSourceMaps: true,
  images: {
    domains: ["animal.seoul.go.kr"],
  },
};

export default nextConfig;
