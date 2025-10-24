import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "session-admin.session.ee",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "imagenes.diariodenavarra.es",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.dlxsf.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "shredder.news",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.iconsofsurf.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ichef.bbci.co.uk",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "boardridingstorageus.blob.core.windows.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.redbull.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.wastedattitude.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "nevadasportsnet.com",
        pathname: "/**",
      }
    ],
  },
};

export default nextConfig;