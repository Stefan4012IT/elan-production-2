/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '',
  },
  sassOptions: {
    additionalData: '$asset-prefix: "";',
  },
};

export default nextConfig;
