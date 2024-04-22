/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        NEXTAUTH_URL: 'http://localhost:3000/',
        MONGO_URL: 'mongodb+srv://foode-ordering:rWDys65CB6JoMnJS@cluster0.rubvmpr.mongodb.net/food-orderinging',
        SECRET: '8bcc02d9b41feec38e929a9d75874772',
      },
};

export default nextConfig;
