/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com", "miro.medium.com", "instagram.fesb3-1.fna.fbcdn.net"],
  },
};

module.exports = nextConfig;
