/** @type {import('next').NextConfig} */
require("dotenv").config;
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "https://crawling-test.vercel.app/" : "",
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
