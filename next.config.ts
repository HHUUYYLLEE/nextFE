import type { NextConfig } from "next";
import MillionLint from "@million/lint";
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
// export default nextConfig;
export default MillionLint.next({
  enabled: true,
  rsc: true,
})(nextConfig);
