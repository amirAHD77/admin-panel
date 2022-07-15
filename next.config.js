/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",

  reactStrictMode: false,
  env: {
    MAIN_PATH: "https://api.inpointconnect.ir/",
    SOCKET_PATH: "https://socket.inpointconnect.ir/",
  },
};

module.exports = nextConfig;
