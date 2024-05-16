/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.clerk.com',
            port: '',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'tomo-sb.s3.eu-central-1.amazonaws.com',
            port: '',
            pathname: '**',
          }
        ],
    },
};

export default nextConfig;
