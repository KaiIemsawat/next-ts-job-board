/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "s6mbhew4n6cuzf8n.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
