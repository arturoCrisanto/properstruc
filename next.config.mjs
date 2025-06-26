/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "lh3.googleusercontent.com", // Google
      "platform-lookaside.fbsbx.com", // Facebook profile images
      "scontent.xx.fbcdn.net", // Sometimes used by Facebook too
    ],
  },
};

export default nextConfig;
