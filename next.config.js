/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix:
    process.env.NODE_ENV === "production" ? "https://hs-jeong88.github.io/crawling-test/" : "",
};

module.exports = nextConfig;
