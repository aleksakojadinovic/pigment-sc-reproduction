import { withPigment } from "@pigment-css/nextjs-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const pigmentConfig = {
  theme: {
    colors: {
      primary: "#9542f5",
    },
  },
};

export default withPigment(nextConfig, pigmentConfig);
