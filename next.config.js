/** @type {import('next').NextConfig} */
import dotenv from "dotenv";
dotenv.config();

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "https://crawling-test.vercel.app/" : "",
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
