
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.tsx");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);

/*
import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;



const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"], 
  },
};

module.exports = nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 //////////
};

export default nextConfig;
*/



