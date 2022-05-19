/** @type {import('next').NextConfig} */
require("dotenv").config;
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "https://crawling-test.vercel.app/" : "",
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
};

module.exports = nextConfig;
