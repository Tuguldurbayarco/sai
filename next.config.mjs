import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  // Skip API routes during build for static export
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
};

export default withNextIntl(nextConfig);
