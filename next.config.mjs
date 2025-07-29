import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  
  // Remove basePath and assetPrefix to avoid routing issues
  // GitHub Pages will serve from whatever domain is configured
  
  // Static export specific configurations
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  
  // Generate static pages for all locales
  async generateBuildId() {
    return 'static-build';
  },
};

export default withNextIntl(nextConfig);
