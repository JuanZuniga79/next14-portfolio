import createNextIntlPlugin from 'next-intl/plugin';
import {NextConfig} from "next";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.igdsas.com',
                pathname: '/src/assets/**',
            }
        ],
    },
};

export default withNextIntl(nextConfig);