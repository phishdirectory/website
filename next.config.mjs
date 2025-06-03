/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'cdn.sanity.io',
        }],
    },
    redirects: async () => {
        return [
            {
                source: '/login',
                destination: 'https://veritas.phish.com/login',
                permanent: true
            },
            {
                source: '/signup',
                destination: 'https://veritas.phish.com/signup',
            }
        ]
    },
}


export default nextConfig;
