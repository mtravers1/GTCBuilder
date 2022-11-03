/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    AUTH_BASEURL: process.env.NEXT_AUTH_BASEURL,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "res.cloudinary.com",
      "ucarecdn.com",
      "placeimg.com",
    ],
  },
};
module.exports = nextConfig;
