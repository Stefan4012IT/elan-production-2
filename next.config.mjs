/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions ? '/elan-production-2' : '',
  assetPrefix: isGithubActions ? '/elan-production-2/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? '/elan-production-2' : '',
  },
  sassOptions: {
    additionalData: `$asset-prefix: "${isGithubActions ? '/elan-production-2' : ''}";`,
  },
};

export default nextConfig;
