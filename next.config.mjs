/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: 'export',  output almak icin
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_GRAPHCMS_URL: process.env.NEXT_PUBLIC_GRAPHCMS_URL,
  }
};

export default nextConfig;
