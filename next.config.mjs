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
                destination: 'https://veritas.phish.directory/login',
                permanent: true
            },
            {
                source: '/signin',
                destination: 'https://veritas.phish.directory/login',
                permanent: true
            },
            {
                source: '/signup',
                destination: 'https://veritas.phish.directory/signup',
                permanent: true
            },
            {
                source: '/dashboard',
                destination: 'https://dashboard.phish.directory/',
                permanent: true
            }
        ]
    },
}


export default nextConfig;
